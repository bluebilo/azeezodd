function sortProjects() {
    const container = document.querySelector('.project-list');
    const projects = Array.from(container.getElementsByTagName('li'));
  
    projects.sort((a, b) => {
      const aDifficulty = parseInt(a.getAttribute('data-difficulty'));
      const bDifficulty = parseInt(b.getAttribute('data-difficulty'));
  
      return bDifficulty - aDifficulty;
    });
  
    projects.forEach(project => container.appendChild(project));
  }
  
  function filterByTag() {
    const filter = document.getElementById('tagFilter').value.toUpperCase();
    const projects = document.getElementsByClassName('project-list')[0].getElementsByTagName('li');
  
    for (let i = 0; i < projects.length; i++) {
      const tags = projects[i].getAttribute('data-tags').toUpperCase();
      if (tags.includes(filter)) {
        projects[i].style.display = '';
      } else {
        projects[i].style.display = 'none';
      }
    }
  }
  
  function toggleDescription(button) {
    const description = button.nextElementSibling;
    description.style.display = (description.style.display === 'none') ? '' : 'none';
  }
  
  function clearFilters() {
    const filterSelect = document.getElementById('tagFilter');
    filterSelect.selectedIndex = 0;
  
    const projects = document.getElementsByClassName('project-list')[0].getElementsByTagName('li');
    for (let i = 0; i < projects.length; i++) {
      projects[i].style.display = '';
    }
  
    // Sort the projects again after clearing the filters
    sortProjects();
  }
  