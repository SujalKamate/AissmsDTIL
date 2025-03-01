// Language Texts
const texts = {
    en: {
      heroTitle: "Unlock Your Potential with Eduera",
      heroSubtitle: "Your gateway to world-class education.",
      contentTitle: "About Eduera",
      contentDescription: "Eduera is a leading online educational platform that offers courses in various fields, including technology, business, arts, and more. Our mission is to make quality education accessible to everyone, everywhere.",
      feature1Title: "Wide Range of Courses",
      feature1Description: "Choose from thousands of courses taught by industry experts.",
      feature2Title: "Learn at Your Own Pace",
      feature2Description: "Study anytime, anywhere, and at your own speed.",
      feature3Title: "Certification",
      feature3Description: "Earn certificates to showcase your skills and achievements.",
      getStartedButton: "GET STARTED --->"
    },
    es: {
      heroTitle: "Desbloquea tu potencial con Eduera",
      heroSubtitle: "Tu puerta de entrada a una educación de clase mundial.",
      contentTitle: "Acerca de Eduera",
      contentDescription: "Eduera es una plataforma educativa en línea líder que ofrece cursos en varios campos, incluidos tecnología, negocios, artes y más. Nuestra misión es hacer que la educación de calidad sea accesible para todos, en todas partes.",
      feature1Title: "Amplia gama de cursos",
      feature1Description: "Elija entre miles de cursos impartidos por expertos de la industria.",
      feature2Title: "Aprende a tu propio ritmo",
      feature2Description: "Estudia en cualquier momento, en cualquier lugar y a tu propio ritmo.",
      feature3Title: "Certificación",
      feature3Description: "Obtén certificados para mostrar tus habilidades y logros.",
      getStartedButton: "COMENZAR --->"
    },
    fr: {
      heroTitle: "Débloquez votre potentiel avec Eduera",
      heroSubtitle: "Votre passerelle vers une éducation de classe mondiale.",
      contentTitle: "À propos d'Eduera",
      contentDescription: "Eduera est une plateforme éducative en ligne leader qui propose des cours dans divers domaines, notamment la technologie, les affaires, les arts et plus encore. Notre mission est de rendre une éducation de qualité accessible à tous, partout.",
      feature1Title: "Large gamme de cours",
      feature1Description: "Choisissez parmi des milliers de cours dispensés par des experts de l'industrie.",
      feature2Title: "Apprenez à votre rythme",
      feature2Description: "Étudiez à tout moment, n'importe où et à votre rythme.",
      feature3Title: "Certification",
      feature3Description: "Obtenez des certificats pour mettre en valeur vos compétences et réalisations.",
      getStartedButton: "COMMENCER --->"
    }
  };
  
  // Function to change language
  function changeLanguage() {
    const language = document.getElementById("languageSelect").value;
    const text = texts[language];
  
    // Update all text elements
    document.getElementById("heroTitle").innerText = text.heroTitle;
    document.getElementById("heroSubtitle").innerText = text.heroSubtitle;
    document.getElementById("contentTitle").innerText = text.contentTitle;
    document.getElementById("contentDescription").innerText = text.contentDescription;
    document.getElementById("feature1Title").innerText = text.feature1Title;
    document.getElementById("feature1Description").innerText = text.feature1Description;
    document.getElementById("feature2Title").innerText = text.feature2Title;
    document.getElementById("feature2Description").innerText = text.feature2Description;
    document.getElementById("feature3Title").innerText = text.feature3Title;
    document.getElementById("feature3Description").innerText = text.feature3Description;
    document.getElementById("getStartedButton").innerText = text.getStartedButton;
  }
  
  // Initialize with default language (English)
  changeLanguage();