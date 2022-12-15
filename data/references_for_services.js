(() => {
    const app = {
        initialize() {
            this.cacheElements();
            this.generateHTMLForReferencesForServices();
        },
        cacheElements() {
            this.$references_for_services = document.getElementById('references_for_services')
          },
     generateHTMLForReferencesForServices(){
        const referencesForServicesElements = REFERENCES.slice(0, 6).map((referenceForService) => {
            return `
            <ul>
                <li>
                    <img src='${referenceForService.image}'>
                    <p>${referenceForService.description}</p>
                </li>
            </ul>
            `
        }).join("");
        this.$references_for_services.innerHTML = (referencesForServicesElements);
    },
        };
        app.initialize();
      })();