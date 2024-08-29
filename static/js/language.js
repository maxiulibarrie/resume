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
            return "I'm an Information System Engineer specialized in Machine Learning and Deep Learning with 3+ years experience. Expert in Data Exploration and Data Analysis in order to give the best model possible, extract important information about the data and communicate it to the client. Also maintain MLOps processes. I’m always predisposed to help and collaborate in a team work."
        } else if (language === Languages.Spanish) {
            return "Soy Ingeniero en Sistemas de Información especializado en Machine Learning y Deep Learning con más de 3 años de experiencia. Experto en Exploración y Análisis de Datos para dar el mejor modelo posible, extraer información importante sobre los datos y comunicarla al cliente. También mantengo los procesos MLOps. Siempre estoy predispuesto a ayudar y colaborar en el equipo."
        }
    },
    btnDownloadMyResume: function() {
        if (language === Languages.English) {
            return '<a href="cvs/Maximiliano_Ulibarrie_CV_English.pdf">\
                        <button class="btn btn-info ml-auto mr-md-5">\
                            <img src="static/assets/download.png" style="height: 3rem;"></img>\
                        </button>\
                    </a>'
        }
        else if (language === Languages.Spanish) {
            return '<a href="cvs/Maximiliano_Ulibarrie_CV_Espaniol.pdf">\
                        <button class="btn btn-info ml-auto mr-md-5">\
                            <img src="static/assets/descargar.png" style="height: 3rem;"></img>\
                        </button>\
                    </a>'
        }
    },
    btnChangeLanguage: function() {
        if (language === Languages.English) {return '<img src="static/assets/ESPANIOL_VERSION.png" style="height: 3rem;">'}
        else if (language === Languages.Spanish) {return '<img src="static/assets/ENGLISH_VERSION.png" style="height: 3rem;">'}
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
                        maxiagst@gmail.com<br>\
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
                        maxiagst@gmail.com<br>\
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
            return "<li><strong>Data Scientist at Fligoo (May 2024 - present)</strong><br>\
                        Develop, enhance and maintain of product recommendation systems. \
                        Data preparation and processing, as well as maintenance of pipelines to process raw \
                        data into user recommendations. Using technologies such as Azure and Databricks.<br>\
                        <strong>Skills:</strong> Python · Microsoft Azure · Databricks · AWS · Git · Docker <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist at Globant (April 2023 - May 2024)</strong><br>\
                        Develop, enhance and maintain a NLP model for several movie and content streaming services. Exploratory Data Analysis on content in order to develop a model that improve the experience on searching for users. Maintain the MLOps processes (training and serving) using an internal framework with AWS, Kubernetes and Spinnaker.<br>\
                        <strong>Skills:</strong> Python · Java · AWS · Git · Docker · Pytorch · Tensorflow <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist at Globant (February 2022 - March 2023)</strong><br>\
                        Maintain and enhance Computer Vision models related with a famous park that detects guests out of bounds in rides and trigger alerts if an event occurred. Exploratory Data Analysis over the images to improve models using segmentation and object detection algorithms.<br>\
                        <strong>Skills:</strong> AWS · AWS SageMaker · PyTorch · Python · Git · Docker <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist at Globant (January 2021 - January 2022)</strong><br>\
                        Develop, enhance and maintain a forecast model that allows the user to analyze different scenarios in the market and make decisions in the pricing for the Automotive Industry. Exploratory Data Analysis from several data bases in order obtain data to make the analysis, develop the model and expose a service.<br>\
                        <strong>Skills:</strong> Python · FastAPI · Jupyter · Oracle Database · Git <br>\
                    </li>\
                    <hr>\
                    <li><strong>Test Automation Developer at Globant (March 2019 - November 2020)</strong><br>\
                        I developed test automation scripts for a portal education web infrastructure (web apps, databases and services API REST).<br>\
                        <strong>Skills:</strong> Java · Selenium · Oracle Database · MongoDB · Jenkins · Git <br>\
                    </li>"
        } else if (language === Languages.Spanish) {
            return "<li><strong>Data Scientist en Fligoo (Mayo 2024 - presente)</strong><br>\
                        Desarrollar, mejorar y mantener sistemas de recomendación de productos. \
                        Preparación y procesamiento de datos, así como el mantenimiento de los \
                        pipelines para procesar datos en bruto y convertirlos en recomendaciones \
                        para los usuarios. Usando tecnologías como Azure y Databricks.<br>\
                        <strong>Tecnologías:</strong> Python · Microsoft Azure · Databricks · AWS · Git · Docker <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist en Globant (Abril 2023 - Mayo 2024)</strong><br>\
                        Desarrollar, mejorar y mantener un modelo de NLP para varios servicios de transmisión de películas y series. Análisis exploratorio de datos sobre contenidos para desarrollar un modelo que mejore la experiencia de búsqueda de los usuarios. Mantener los procesos MLOps (training y serving del modelo) utilizando un framework interno con AWS, Kubernetes y Spinnaker.<br>\
                        <strong>Tecnologías:</strong> Python · Java · AWS · Git · Docker · Pytorch · Tensorflow <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist en Globant (Febrero 2022 - Marzo 2023)</strong><br>\
                        Mantener y mejorar los modelos de Computer Vision relacionados con un parque de atracciones famoso que detecta visitantes fuera de los límites en las atracciones y activa alertas si ocurre un evento. Análisis exploratorio de datos sobre las imágenes para mejorar modelos mediante algoritmos de segmentación y detección de objetos.<br>\
                        <strong>Tecnologías:</strong> AWS · AWS SageMaker · PyTorch · Python · Git · Docker <br>\
                    </li>\
                    <hr>\
                    <li><strong>Data Scientist en Globant (Enero 2021 - Enero 2022)</strong><br>\
                        Desarrollar, mejorar y mantener un modelo de forecasting que permita al usuario analizar diferentes escenarios en el mercado y tomar decisiones en la determinación de precios para la Industria Automotriz. Análisis Exploratorio de Datos de una gran cantidad de bases de datos con el fin de obtener datos para realizar el análisis, desarrollar el modelo y exponer un servicio.<br>\
                        <strong>Tecnologías:</strong> Python · FastAPI · Jupyter · Oracle Database · Git <br>\
                    </li>\
                    <hr>\
                    <li><strong>Java Developer/Test Automation en Globant (Marzo 2019 - Noviembre 2020)</strong><br>\
                        Desarrollé scripts de automatización de pruebas para un portal de infraestructura web educativa (aplicaciones web, bases de datos y servicios API REST).<br>\
                        <strong>Tecnologías:</strong> Java · Selenium · Oracle Database · MongoDB · Jenkins · Git<br>\
                    </li>"
        }
    },
    personalProjectsTitle: function() {
        if (language === Languages.English) {
            return "Personal projects for self learning:"
        }
        else if (language === Languages.Spanish) {
            return "Projectos personales para aprendizaje:"
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
                        Proyecto de Computer Vision para detectar automóviles y prevenir accidentes con personas que cruzan en medio de la calle. Utilice Docker Compose para procesos CI/CD.<br>\
                        <strong>Herramientas: </strong>Python · PyTorch · Docker · Docker Compose<br>\
                        <strong>REPO LINK: </strong><a href='https://github.com/MaxiUlibarrie/cars-cv'>https://github.com/MaxiUlibarrie/cars-cv</a></link><br>\
                    </li>\
                    <hr>\
                    <li>\
                        <strong>Reviews Classifier Spanish</strong><br>\
                        Utilice BETO Transformers y FastAPI para clasificar reseñas de películas en español. Utilice Docker Compose para procesos CI/CD.<br>\
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
