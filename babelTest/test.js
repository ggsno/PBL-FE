class NameTag {
  constructor(name) {
    this.name = name;
  }

  print() {
    console.log("Hello,", this.name);
  }
}

const nameTag = new NameTag("memoming");
nameTag.print();

