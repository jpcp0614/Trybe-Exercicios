enum STATUS {
  active,
  inactive,
}

export class Category {
  id: number | undefined;
  name: string | undefined;
  status: number = STATUS.active;
}