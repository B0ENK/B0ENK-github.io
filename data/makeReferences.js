(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.buildUI();
            this.getTitleForType();
            this.generateHTMLForReferences();
        },
        cacheElements() {
            this.$references = document.getElementById('references')
          },
        buildUI(){
            this.$references.innerHTML = this.generateHTMLForReferences();
        },
    getTitleForType(type){
        switch (type){
            case "b2b":
                return "Zakelijke omgeving";
            case "private":
                return "Privé omgeving";
            case "public":
                return "Openbare omgeving";
            default:
                return "";
            }
        },
     generateHTMLForReferences(){
        const types = ["b2b", "private", "public"]
        /*new set voor unieke waardes en daarin map */
        return types
        .map ((type) => {
            const referencesByType = REFERENCES.filter((r)=>type === r.type);
            return `
            <div> 
                <h2 id='${this.getTitleForType(type)}'>${this.getTitleForType(type)}</h2>
                <ul>
                ${referencesByType.map((reference)=> {
                        return `
                        <li>
                        <img src="${reference.image}">
                        <p>${reference.description}</p>
                        </li>
                        `;
                    }).join("")}
                </ul>
            </div>`;
        })
        .join("")
     },
        };
        app.initialize();
      })();