import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IAddOrder, IOrder, IOrderId } from '../interfaces/index.interfaces';

export default class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public create = async (order: IAddOrder): Promise<IOrder> => {
    const { userId, products } = order;
    const QUERY = 'INSERT INTO Orders (userId) VALUES (?);';
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(QUERY, [userId]);

    //* atualizar produtos com o id do usuário
    const QUERY2 = 'UPDATE Products SET orderId=? WHERE id IN (?);';
    await this.connection.query<ResultSetHeader>(QUERY2, [insertId, products]);

    return {
      order: {
        userId,
        products,
      }
    }
  }

  public getAll = async () => {
    const QUERY = `SELECT
    O.id, O.userId, GROUP_CONCAT(P.id) AS products
    FROM Orders AS O
    INNER JOIN Products AS P
    ON O.id = P.orderId
    GROUP BY O.id`;
    const [result] = await this.connection.execute<RowDataPacket[]>(QUERY);

    return result.map(item => ({
      id: item.id,
      userId: item.userId,
      products: item.products.split(',').map((n: string) => Number(n)),
    }));
  }

  public getById = async (id: number): Promise<IOrderId> => {
    const QUERY_USERID = 'SELECT * FROM Orders WHERE id=?;';
    const [userId] = await this.connection.execute<RowDataPacket[]>(QUERY_USERID, [id]);

    const QUERY = `SELECT
    P.id AS products
    FROM Orders AS O
    INNER JOIN Products AS P
    ON O.id = P.orderId
    WHERE O.id = ?
    ORDER BY P.orderId`;
    const [products] = await this.connection.execute<RowDataPacket[]>(QUERY, [id]);

    return {
      id,
      userId: userId[0].userId,
      products: products.map(product => product.products),
    }
  }

}