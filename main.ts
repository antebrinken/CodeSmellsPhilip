/*
  1. Se om du kan hitta två stycken code smells i följande funktion och rätta till dem.
  Funktionen tar emot en lista med längshoppslängder och syftet med funktionen är att summera
  dessa hopplängder.
  */

  function getJumpLength(jumpings: number[]): number {
    return  jumpings.reduce((jumpDistanceSoFar, currentJump) => jumpDistanceSoFar + currentJump, 0);
  }
  
  /*
    2. I detta exempel har vi fokuserat på if-statements. Se om du kan göra exemplet bättre!
    */
    class Student {
      constructor(
        public name: string,
        public handedInOnTime: boolean
      ) {}
    }
 
    function getStudentStatus(student: Student): string {
      return student.name === "Sebastian" && student.handedInOnTime ? "VG" : "IG";
    }
  
  /*
    3. Variabelnamn är viktiga. Kika igenom följande kod och gör om och rätt.
    Det finns flera code smells att identifiera här. Vissa är lurigare än andra.
    */
  

   
  class TemperatureData {
    constructor(public city: string, public date: Date, public temperature: number) {}
  }
  
  function averageWeeklyTemperature(records: TemperatureData[]): number {
    const totalTemperature = records
      .filter(record => record.city === "Stockholm" && record.date.getTime() > Date.now() - 604800000)
      .reduce((sum, record) => sum + record.temperature, 0);
    
    return totalTemperature / 7;
  }
  
  /*
    4. Följande funktion kommer att presentera ett objekt i dom:en. 
    Se om du kan göra det bättre. Inte bara presentationen räknas, även strukturer.
    */
  
  

  interface Product {
    name: string;
    price: number;
    amount: number;
    description: string;
    image: string;
  }
  
  function showProduct(product: Product, parent: HTMLElement) {
    parent.innerHTML += `
      <div>
        <h4>${product.name}</h4>
        <img src="${product.image}" alt="${product.name}">
        <strong>Pris: ${product.price} kr</strong>
        <p>${product.description}</p>
        <p>I lager: ${product.amount} st</p>
      </div>`;
  }

  interface Product {
    name: string,
    price: number,
    amount: number,
    description: string,
    image: string,
  }
  function showProduct2(product: Product, parent: HTMLElement | null) {
    if (!parent) return; // Kontrollera om parent är null innan vi fortsätter
  
    const { name, price, image, amount, description } = product;
  
    const container = document.createElement("div");
    container.classList.add("product");
  
    const title = document.createElement("h4");
    title.textContent = name;
  
    const pricetag = document.createElement("strong");
    pricetag.textContent = `${price} SEK`;
  
    const stockInfo = document.createElement("p");
    stockInfo.textContent = amount > 0 ? `In stock: ${amount}` : "Out of stock";
    stockInfo.classList.add(amount > 0 ? "in-stock" : "out-of-stock");
  
    const descTag = document.createElement("p");
    descTag.textContent = description;
  
    const imageTag = document.createElement("img");
    imageTag.src = image;
    imageTag.alt = `Image of ${name}`;
  
    container.append(title, imageTag, pricetag, stockInfo, descTag);
    parent.appendChild(container);
  }
  
  /* Alternativ kod, den översta är kort och följer KISS och DRY metoden medan den andra är en
   bättre fungerande kod som fungerar bättre */
  
  /*
    5. Följande funktion kommer presentera studenter. Men det finns ett antal saker som 
    går att göra betydligt bättre. Gör om så många som du kan hitta!
    */
  

  function presentStudents(students: Student[]) {
    const passedList = document.querySelector("ul#passedstudents");
    const failedList = document.querySelector("ul#failedstudents");
  
    students.forEach(student => {
      const container = document.createElement("div");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = student.handedInOnTime;
  
      container.appendChild(checkbox);
  
      const targetList = student.handedInOnTime ? passedList : failedList;
      targetList?.appendChild(container);
    });
  }
  
  
  /*
    6. Skriv en funktion som skall slå ihop följande texter på ett bra sätt:
    Lorem, ipsum, dolor, sit, amet
    Exemplet under löser problemet, men inte speciellt bra. Hur kan man göra istället?
    */
    function concatenateStrings(): string {
      return ["Lorem", "ipsum", "dolor", "sit", "amet"].join('');
    }
  
  /* 
  7. Denna funktion skall kontrollera att en användare är över 20 år och göra någonting.
      Det finns dock problem med denna typ av funktion. Vad händer när kraven ändras och
      fler och fler parametrar behöver läggas till? T.ex. avatar eller adress. Hitta en bättre
      lösning som är hållbar och skalar bättre. 
  */
      interface User {
        name: string;
        birthday: Date;
        email: string;
        password: string;
        avatar: string;  
        address: string; 
      }
      
      function createUser(user: User): string | void {
        
        let ageDiff = Date.now() - user.birthday.getTime();
        let ageDate = new Date(ageDiff);
        let userAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      
        console.log(userAge);
      
        if (userAge >= 20) {
          // Logic för att skapa användare
          console.log('Användaren har skapats:', user.name);
        } else {
          return "Du är under 20 år";
        }
      }
  