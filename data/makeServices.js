(() => {
    const app = {
        initialize() {
          this.cacheElements();
          this.buildUI();
        },
        cacheElements() {
            this.$services = document.getElementById('services')
          },
          buildUI(){
            this.$services.innerHTML = this.generateHTMLForServices();
          },
        generateHTMLForServices(){
          const currentPage = this.$services.dataset.type;
          return SERVICES
          .filter((service) => service.property === currentPage)
          .map((service) => {
            return `        
            <div class = '${service.property}'>
            <figure><img src='${service.image}' alt=''></figure>
            <h1>${service.title}</h1>
            <p>${service.paragraph}</p>
            <button>Meer informatie</button>
            </div>
            `;
          })
          .join('');
        },
        };
        app.initialize();
      })();