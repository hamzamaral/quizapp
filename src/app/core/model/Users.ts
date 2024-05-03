export class User {
  //firebase içinde bana gönderdiğibilgileri user içinde depoloyorum sonradan bu bilgileri istediğim yerde çagırabilirim
  constructor(
    public email: string,
    public id: string,
    private _token: string,
    private _tokenExpirationDate: Date //son geçererlilik  tarihi tutuluyor
  ) { }

  get token() {
    if(!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
      return null;
      // || = yada
    }
    return this._token;
  }
}
