export class Car {
  constructor(
    public readonly id: number | undefined,
    public readonly title: string,
    public readonly images: [{ name: string; link: string }],
    public readonly price: DoubleRange,
    public readonly gearBox: string,
    public readonly airConditioner: boolean,
    public readonly fuer: string,
    public readonly doors: Number,
    public readonly seats: Number,
    public readonly distance: Number,
    public readonly category: string,
    public readonly carEquipment: []
  ) {}
}
