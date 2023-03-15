const Languages = {
    English: 'english',
    Spanish: 'spanish'
}

let language = Languages.English;

let elements = {
    presentation: function() {return document.getElementsByClassName('presentation')},
    btnDownloadMyResume: function() {return document.getElementById('btnDownloadMyResume')},
    btnChangeLanguage: function() {return document.getElementById('btnChangeLanguage')},
    contactTitle: function() {return document.getElementById('contactTitle')},
    contact: function() {return document.getElementById('contact')},
    gradeCertificateTitle: function() {return document.getElementById('gradeCertificateTitle')},
    gradeCertificate: function() {return document.getElementById('gradeCertificate')},
    formalExperiences: function() {return document.getElementById('formalExperiences')},
    formalExperiencesTitle: function() {return document.getElementById('formalExperiencesTitle')},
    personalProjectsTitle: function() {return document.getElementById('personalProjectsTitle')},
    personalProjects: function() {return document.getElementById('personalProjects')},
    coursesCertificationsTitle: function() {return document.getElementById('coursesCertificationsTitle')},
    coursesCertifications: function() {return document.getElementById('coursesCertifications')},
    fewWords: function() {return document.getElementById('fewWords')},
    mainlyMasterTitle: function() {return document.getElementById('mainlyMasterTitle')},
    alsoWorkWith: function() {return document.getElementById('alsoWorkWith')},
    canHandleWith: function() {return document.getElementById('canHandleWith')}
}

let texts = {
    presentation: function() {
        if (language === Languages.English) {
            return "Hello! I am an Information System Engineer specialized in Machine Learning with 2+ experience. \
            Focused on delivering with the best practices and the cleaner code within my capabilities, which are constantly improving. \
            Also, I like learning about new practices and technologies. Fluent speaking English and always predisposed to help and collaborate in a team work."
        } else if (language === Languages.Spanish) {
            return "Hola! Soy Ingeniero en Sistemas de Información especializado en Machine Learning con más de 2 años de experiencia. \
            Estoy centrado en hacer el delivery con las mejores prácticas y el código más limpio dentro de mis capacidades, las cuales \
            estoy constantemente mejorando. También me gusta aprender sobre nuevas prácticas y tecnologías. Hablo inglés de manera fluida \
            y siempre estoy dispuesto a ayudar y colaborar en un equipo de trabajo."
        }
    },
    btnDownloadMyResume: function() {
        if (language === Languages.English) {
            return '<a href="static/download/Maximiliano_Ulibarrie_CV_English.pdf">\
                        <button class="btn btn-info ml-auto mr-md-5">\
                            <img src="static/assets/download.png" style="height: 3rem;"></img>\
                        </button>\
                    </a>'
        }
        else if (language === Languages.Spanish) {
            return '<a href="static/download/Maximiliano_Ulibarrie_CV_Espaniol.pdf">\
                        <button class="btn btn-info ml-auto mr-md-5">\
                            <img src="static/assets/descargar.png" style="height: 3rem;"></img>\
                        </button>\
                    </a>'
        }
    },
    btnChangeLanguage: function() {
        if (language === Languages.English) {return '<img src="static/assets/spanish.svg" style="height: 3rem;">'}
        else if (language === Languages.Spanish) {return '<img src="static/assets/english.svg" style="height: 3rem;">'}
    },
    gradeCertificateTitle: function() {
        if (language === Languages.English) {return 'Education'}
        else if (language === Languages.Spanish) {return 'Educación'}
    },
    gradeCertificate: function() {
        if (language === Languages.English) {return 'Information Systems Engineer<br>UTN - Facultad Regional Resistencia<br>'}
        else if (language === Languages.Spanish) {return 'Ingeniero en Sistemas de Información<br>UTN - Facultad Regional Resistencia<br>'}
    },
    contactTitle: function() {
        if (language === Languages.English) {return "Contact"}
        else if (language === Languages.Spanish) {return "Contacto"}
    },
    contact: function() {
        if (language === Languages.English) {
            return "<li>\
                        <strong>Location: </strong>\
                        Argentina / Cordoba, Cordoba Capital<br>\
                    </li>\
                    <li>\
                        <strong>Mail: </strong>\
                        agustin.ulibarrie@gmail.com<br>\
                    </li>\
                    <li>\
                        <strong>LinkedIn: </strong>\
                        <a href='https://www.linkedin.com/in/maxiulibarrie'>https://www.linkedin.com/in/maxiulibarrie</a><br>\
                    </li>"
        } else if (language === Languages.Spanish) {
            return "<li>\
                        <strong>Locación: </strong>\
                        Argentina / Cordoba, Cordoba Capital<br>\
                    </li>\
                    <li>\
                        <strong>Mail: </strong>\
                        agustin.ulibarrie@gmail.com<br>\
                    </li>\
                    <li>\
                        <strong>LinkedIn: </strong>\
                        <a href='https://www.linkedin.com/in/maxiulibarrie'>https://www.linkedin.com/in/maxiulibarrie</a><br>\
                    </li>"
        }
    },
    formalExperiencesTitle: function() {
        if (language === Languages.English) {return "I formally worked on the following projects:"}
        else if (language === Languages.Spanish) {return "Trabajé formalmente en los siguientes proyectos:"}
    },
    formalExperiences: function() {
        if (language === Languages.English) {
            return "<li><strong>Machine Learning Engineer at Globant (February 2022 - March 2023)</strong><br>\
                        I worked on Computer Vision related projects in a famous park where we detected guest out of bounds in rides and trigger alerts if \
                        an event occurred.<br>\
                        <strong>Skills:</strong> Amazon Web Services (AWS) · AWS SageMaker · PyTorch · Python · Git · Docker<br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist at Globant (January 2021 - January 2022)</strong><br>\
                        I worked on a forecast analytics tool that allows the customer to analyze different scenarios in the market and make \
                        decisions in the pricing for the Automotive Industry.<br>\
                        <strong>Skills:</strong> Python · FastAPI · Jupyter · Oracle Database · Git<br>\
                    </li>\
                    <hr>\
                    <li><strong>Java Developer/Test Automation at Globant (Marh 2019 - November 2020)</strong><br>\
                        I developed test automation scripts for a portal education web infrastructure (web apps, databases and services API REST).<br>\
                        <strong>Skills:</strong> Java · Selenium · Oracle Database · MongoDB · Jenkins · Git<br>\
                    </li>"
        } else if (language === Languages.Spanish) {
            return "<li><strong>Machine Learning Engineer en Globant (Febrero 2022 - Marzo 2023)</strong><br>\
                        Trabajé en proyectos de Computer Vision en un famoso parque de atracciones donde detectabamos personas fuera de los límites en paseos en \
                        botes y lanzanbamos alertas si eso ocurria.<br>\
                        <strong>Skills:</strong> Amazon Web Services (AWS) · AWS SageMaker · PyTorch · Python · Git · Docker<br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist en Globant (Enero 2021 - Enero 2022)</strong><br>\
                        Trabajé en un proyecto donde desarrollamos una herramienta de forecasting donde permitía al cliente analizar \
                        diferentes escenarios en el mecardo automotriz y tomar mejores desiciones respecto al pricing.<br>\
                        <strong>Skills:</strong> Python · FastAPI · Jupyter · Oracle Database · Git<br>\
                    </li>\
                    <hr>\
                    <li><strong>Java Developer/Test Automation en Globant (Marzo 2019 - Noviembre 2020)</strong><br>\
                        Desarrollé test automation scripts para un portal educativo (aplicaciones web, base de datos y servicios API REST)<br>\
                        <strong>Skills:</strong> Java · Selenium · Oracle Database · MongoDB · Jenkins · Git<br>\
                    </li>"
        }
    },
    personalProjectsTitle: function() {
        if (language === Languages.English) {
            return "Along with previously mentioned, I also worked parallelly at home for hobbie and self learning on the following personal projects:"
        }
        else if (language === Languages.Spanish) {
            return "Junto con lo mencionado previamente, también trabajé en casa por hobbie y aprendizaje autodidacta con los siguientes proyectos personales:"
        }
    },
    personalProjects: function() {
        if (language === Languages.English) {
            return "<li>\
                        <strong>Prevent Collision System</strong><br>\
                        Computer Vision project to detect cars and prevent accidents with people that cross the middle of the street. Use Docker Compose for CI/CD processes.<br>\
                        <strong>Tools: </strong>Python · PyTorch · Docker · Docker Compose<br>\
                        <strong>REPO LINK: </strong><a href='https://github.com/MaxiUlibarrie/cars-cv'>https://github.com/MaxiUlibarrie/cars-cv</a></link><br>\
                    </li>\
                    <hr>\
                    <li>\
                        <strong>Reviews Classifier Spanish</strong><br>\
                        Use BETO Transformers and FastAPI to classify movie reviews in spanish. Use Docker Compose for CI/CD processes.<br>\
                        <strong>Tools: </strong>Python · PyTorch · Docker · Docker Compose · FastAPI<br>\
                        <strong>REPO LINK: </strong><a href='https://github.com/MaxiUlibarrie/reviews-clf-nlp'>https://github.com/MaxiUlibarrie/reviews-clf-nlp</a></link><br>\
                    </li>"
        } else if (language === Languages.Spanish) {
            return "<li>\
                        <strong>Prevent Collision System</strong><br>\
                        Proyecto de Computer Vision para detectar vehiculos y prevenir accidentes con personas que cruzan por el medio de la calle. \
                        Usa Docker Compose para procesos CI/CD.<br>\
                        <strong>Herramientas: </strong>Python · PyTorch · Docker · Docker Compose<br>\
                        <strong>REPO LINK: </strong><a href='https://github.com/MaxiUlibarrie/cars-cv'>https://github.com/MaxiUlibarrie/cars-cv</a></link><br>\
                    </li>\
                    <hr>\
                    <li>\
                        <strong>Reviews Classifier Spanish</strong><br>\
                        Usa BETO Transformers y FastAPI para clasificar opiniones de películas en español. Usa Docker Compose para procesos CI/CD.<br>\
                        <strong>Herramientas: </strong>Python · PyTorch · Docker · Docker Compose · FastAPI<br>\
                        <strong>REPO LINK: </strong><a href='https://github.com/MaxiUlibarrie/reviews-clf-nlp'>https://github.com/MaxiUlibarrie/reviews-clf-nlp</a></link><br>\
                    </li>"
        }
    },    
    coursesCertificationsTitle: function() {
        if (language === Languages.English) {
            return "Courses and Certifications:"
        }
        else if (language === Languages.Spanish) {
            return "Cursos y Certificaciones:"
        }
    },
    coursesCertifications: function() {
        if (language === Languages.English) {
            return "<li>\
                        <strong>Introduction to Machine Learning Model Deployment Course:</strong><br>\
                        Fundamentals of Machine Learning Model Deployment. MLOps life flow and work on a project that is scalable and can be turned into a product.<br>\
                        <strong>Tools: </strong>Python · Docker · DVC (Data Version Control) · Github Actions · FastAPI<br>\
                        <strong>CERTIFICATE: </strong><a href='https://platzi.com/p/agustin.ulibarrie/curso/2645-ml-ops/diploma/detalle/'>LINK</a></link><br>\
                    </li>"
        } else if (language === Languages.Spanish) {
            return "<li>\
                        <strong>Curso de Introducción al Despliegue de Modelos de Machine Learning:</strong><br>\
                        Fundamentos del Despliegue de Modelos de Machine Learning. Flujo de vida del MLOps y trabajo en un proyecto que sea escalable y que puede convertirse en un producto.<br>\
                        <strong>Herramientas: </strong>Python · Docker · DVC (Data Version Control) · Github Actions · FastAPI<br>\
                        <strong>CERTICADO: </strong><a href='https://platzi.com/p/agustin.ulibarrie/curso/2645-ml-ops/diploma/detalle/'>LINK</a></link><br>\
                    </li>"
        }
    },    
    fewWords: function() {
        if (language === Languages.English) {return 'In a few words...'}
        else if (language === Languages.Spanish) {return 'En resumen...'}
    },
    mainlyMasterTitle: function() {
        if (language === Languages.English) {return 'I mainly master:'}
        else if (language === Languages.Spanish) {return 'Domino muy bien las tecnologías:'}
    },
    alsoWorkWith: function() {
        if (language === Languages.English) {return 'I am good also with:'}
        else if (language === Languages.Spanish) {return 'También soy bueno con:'}
    },
    canHandleWith: function() {
        if (language === Languages.English) {return "I have worked and I can handle with:"}
        else if (language === Languages.Spanish) {return "He trabajado y me las puedo arreglar con:"}
    }
}

function setTexts() {
    for(element of elements.presentation()) element.innerText = texts.presentation();
    elements.btnDownloadMyResume().innerHTML = texts.btnDownloadMyResume();
    elements.btnChangeLanguage().innerHTML = texts.btnChangeLanguage();
    elements.contactTitle().innerHTML = texts.contactTitle();
    elements.contact().innerHTML = texts.contact();
    elements.gradeCertificateTitle().innerHTML = texts.gradeCertificateTitle();
    elements.gradeCertificate().innerHTML = texts.gradeCertificate();
    elements.formalExperiences().innerHTML = texts.formalExperiences();
    elements.formalExperiencesTitle().innerText = texts.formalExperiencesTitle();
    elements.personalProjectsTitle().innerText = texts.personalProjectsTitle();
    elements.personalProjects().innerHTML = texts.personalProjects();
    elements.coursesCertificationsTitle().innerText = texts.coursesCertificationsTitle();
    elements.coursesCertifications().innerHTML = texts.coursesCertifications();
    elements.fewWords().innerText = texts.fewWords();
    elements.mainlyMasterTitle().innerText = texts.mainlyMasterTitle();
    elements.alsoWorkWith().innerText = texts.alsoWorkWith();
    elements.canHandleWith().innerText = texts.canHandleWith()
}

function changeLanguage() {

    if (language === Languages.English) {language = Languages.Spanish}
    else if (language === Languages.Spanish) {language = Languages.English}

    setTexts();

}
