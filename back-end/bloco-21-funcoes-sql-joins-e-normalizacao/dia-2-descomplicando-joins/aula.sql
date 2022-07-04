SELECT * FROM sakila.customer;
SELECT * FROM sakila.address;
SELECT * FROM sakila.city;
SELECT * FROM sakila.country;

SELECT
	C.customer_id 'id',
    CONCAT(C.first_name, ' ', C.last_name) 'name',
    A.address,
    A.district,
    Ci.city,
    Co.country
    FROM sakila.customer C
		INNER JOIN sakila.address A
			ON C.address_id = A.address_id
		INNER JOIN sakila.city Ci
			ON A.city_id = Ci.city_id
		INNER JOIN sakila.country Co
			ON Ci.country_id = Co.country_id
		ORDER BY id;
    