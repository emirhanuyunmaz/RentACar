type tokenType = {
  id: String;
  admin: Boolean;
};

export interface IToken {
  createToken({ id, admin }: { id: String; admin: Number }): String;
  verifyToken(token: String): tokenType;
}
