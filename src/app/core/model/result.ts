// export interface result {
//   soru: string;
//   isim: string;
//   soyisim: string;
//   numara: string;
//   dogruCevap: string;
//   benimCevabim: string;
//   category: string;
//   difficulty: string;
//   type: string;
//   sonuc:string
// }

export interface result {
  [key: string]: {
    Soru: number;
    isim?: string;
    soyisim?: string;
    numara?: string;
    benimCevabim: string;
    category: string;
    difficulty: string;
    dogruCevap: string;
    type: string;
    sonuc?: boolean;
  };
}

export interface Result2 {
  id?:any;
  Soru: number;
  benimCevabim: string;
  category: string;
  difficulty: string;
  dogruCevap: string;
  type: string;
  sonuc?: boolean;
}
