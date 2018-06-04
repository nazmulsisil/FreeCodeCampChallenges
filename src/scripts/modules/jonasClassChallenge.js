const jonasClassChallenge = () => {
  const database = [];

  class BasicInfo {
    constructor(type, name, birth) {
      this.name = name;
      this.birth = birth;
      this.type = type;
    }
  }

  class Park extends BasicInfo {
    constructor(type, name, birth, numOfTrees, areaInSqKm) {
      super(type, name, birth);
      this.age = (() => new Date().getFullYear() - birth)();
      this.numOfTrees = numOfTrees;
      this.haveThousand = (() => this.numOfTrees > 1000)();
      this.areaInSqKm = areaInSqKm;
      this.treeDensity = (() => this.numOfTrees / this.areaInSqKm)();
    }
  }

  class Street extends BasicInfo {
    constructor(type, name, birth, length) {
      super(type, name, birth);
      this.length = length;
      this.size = (() => {
        if (length > 10) return 'huge';
        else if (length > 5) return 'big';
        else if (length < 2) return 'small';
        return 'normal';
      })();
    }
  }

  const rawData = [
    { type: 'park', name: 'Green Park', birth: 1745, numOfTrees: 709, area: 4 },
    {
      type: 'park',
      name: 'National Park',
      birth: 1890,
      numOfTrees: 1205,
      area: 3.25
    },
    { type: 'park', name: 'Oak Park', birth: 1980, numOfTrees: 800, area: 7 },
    { type: 'street', name: 'Ocean Avenue', birth: 1999, length: 9 },
    { type: 'street', name: 'Evergreen Street', birth: 2008, length: 1.8 },
    { type: 'street', name: '4th Street', birth: 2015, length: 4.25 },
    { type: 'street', name: 'Sunset Boulevard', birth: 1982, length: 11.75 }
  ];

  function createDB(raw, db) {
    raw.forEach(el => {
      if (el.type === 'park') db.push(new Park(...Object.values(el)));
      if (el.type === 'street') db.push(new Street(...Object.values(el)));
    });
  }

  function parksReport(db) {
    const parksArr = db.filter(el => el.type === 'park');
    const numOfParks = parksArr.length;
    const parksAvgAge =
      parksArr.map(park => park.age).reduce((a, b) => a + b) / numOfParks;

    const parkWithThousandTrees = parksArr.find(
      park => park.haveThousand === true
    ).name;
    console.log('--------PARKS REPORT--------');
    console.log(
      `Our ${numOfParks} parks have an Average age of ${parksAvgAge}years.`
    );
    parksArr.forEach(park => {
      console.log(
        `${park.name} park has tree density of ${
          park.treeDensity
        } trees per square km.`
      );
    });
    console.log(`${parkWithThousandTrees} has more than 1000 trees.`);
  }

  function streetsReport(db) {
    const streetsArr = db.filter(el => el.type === 'street');
    const numOfStreets = streetsArr.length;
    const streetsTotLength = streetsArr
      .map(street => street.length)
      .reduce((a, b) => a + b);
    const streetsAvgLength = streetsTotLength / numOfStreets;

    console.log('--------STREETS REPORT--------');
    console.log(
      `Our ${numOfStreets} streets have a total length of ${streetsTotLength}km, with an average of ${streetsAvgLength}km.`
    );
    streetsArr.forEach(street => {
      console.log(
        `${street.name}, built in ${street.birth}, is a ${street.size} street.`
      );
    });
  }

  createDB(rawData, database);
  parksReport(database);
  streetsReport(database);
};

export default jonasClassChallenge;
