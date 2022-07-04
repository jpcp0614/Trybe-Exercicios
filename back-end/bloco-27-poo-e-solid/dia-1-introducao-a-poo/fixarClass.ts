class TV {
  brand: string;
  size: number;
  resolution: string;
  connections: string[];
  // connectedTo: string;

  constructor(b: string, s: number, r: string, c: string[]) {
    this.brand = b;
    this.size = s;
    this.resolution = r;
    this.connections = c;
  }

  turnOn(): void {
    console.log(`TV ${this.brand} de ${this.size} polegadas - ${this.resolution} - conexões: ${this.connections}`);
  }
}

const tv = new TV('LG', 55, '4k', ['HDMI', 'VGA']);
tv.turnOn();