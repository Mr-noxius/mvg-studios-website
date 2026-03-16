import React, { useState } from 'react';
import contentData from '../content.json';
import './DevDashboard.css';

const DevDashboard = () => {
  const [content, setContent] = useState(contentData);
  const [status, setStatus] = useState('');

  const handleChange = (section, field, value) => {
    setContent(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...content.work.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setContent(prev => ({
      ...prev,
      work: {
        ...prev.work,
        projects: updatedProjects
      }
    }));
  };

  const addProject = () => {
    const newProject = {
      id: Date.now(),
      title: 'New Project',
      year: new Date().getFullYear().toString(),
      image: 'https://images.unsplash.com/photo-1518135760377-a8905335af20?auto=format&fit=crop&q=80&w=1200',
      youtubeLink: ''
    };
    setContent(prev => ({
      ...prev,
      work: {
        ...prev.work,
        projects: [...prev.work.projects, newProject]
      }
    }));
  };

  const removeProject = (index) => {
    const updatedProjects = content.work.projects.filter((_, i) => i !== index);
    setContent(prev => ({
      ...prev,
      work: {
        ...prev.work,
        projects: updatedProjects
      }
    }));
  };

  // Uses the custom Vite plugin we created earlier to save this locally!
  const handleSave = async () => {
    setStatus('Saving...');
    try {
      const response = await fetch('/api/save-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(content),
      });
      
      if (response.ok) {
        setStatus('Saved successfully! Refresh main site to see changes.');
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('Error saving. Make sure dev server is running.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to connect to dev server plugin.');
    }
  };

  return (
    <div className="dev-dashboard">
      <div className="dev-header">
        <h1>MVG Studios Local CMS</h1>
        <button className="btn-save" onClick={handleSave}>Publish Changes to Codebase</button>
      </div>
      
      {status && <div className="dev-status">{status}</div>}

      <div className="dev-container">
        
        {/* HOMEPAGE EDITOR */}
        <section className="dev-section">
          <h2>Home Page</h2>
          <div className="input-group">
            <label>Hero Description</label>
            <textarea 
              value={content.home.description} 
              onChange={e => handleChange('home', 'description', e.target.value)}
              rows="3"
            />
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Manifesto Bold Text</label>
              <input type="text" value={content.home.manifestoBold} onChange={e => handleChange('home', 'manifestoBold', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Manifesto Secondary Text</label>
              <input type="text" value={content.home.manifestoSecondary} onChange={e => handleChange('home', 'manifestoSecondary', e.target.value)} />
            </div>
          </div>
          <div className="input-row">
            <div className="input-group">
              <label>Showcase Video/Image 1 URL</label>
              <input type="text" value={content.home.vid1} onChange={e => handleChange('home', 'vid1', e.target.value)} />
            </div>
            <div className="input-group">
              <label>Showcase Video/Image 2 URL</label>
              <input type="text" value={content.home.vid2} onChange={e => handleChange('home', 'vid2', e.target.value)} />
            </div>
          </div>
        </section>

        {/* WORK EDITOR */}
        <section className="dev-section">
          <h2>Work / Projects Gallery</h2>
          <div className="input-group">
            <label>Work Page Intro</label>
            <textarea 
              value={content.work.intro} 
              onChange={e => handleChange('work', 'intro', e.target.value)}
              rows="2"
            />
          </div>
          
          <div className="projects-editor">
            {content.work.projects.map((proj, i) => (
              <div key={proj.id} className="project-card-edit">
                <div className="input-row">
                  <div className="input-group">
                    <label>Title</label>
                    <input type="text" value={proj.title} onChange={e => handleProjectChange(i, 'title', e.target.value)} />
                  </div>
                  <div className="input-group" style={{maxWidth: '100px'}}>
                    <label>Year</label>
                    <input type="text" value={proj.year} onChange={e => handleProjectChange(i, 'year', e.target.value)} />
                  </div>
                </div>
                <div className="input-row">
                  <div className="input-group">
                    <label>Image/Thumbnail URL</label>
                    <input type="text" value={proj.image || ''} onChange={e => handleProjectChange(i, 'image', e.target.value)} />
                  </div>
                  <div className="input-group">
                    <label>YouTube Link (Optional)</label>
                    <input type="text" placeholder="e.g. https://youtu.be/..." value={proj.youtubeLink || ''} onChange={e => handleProjectChange(i, 'youtubeLink', e.target.value)} />
                  </div>
                </div>
                <button className="btn-delete" onClick={() => removeProject(i)}>Remove Project</button>
              </div>
            ))}
            <button className="btn-add" onClick={addProject}>+ Add New Project</button>
          </div>
        </section>

        {/* ABOUT EDITOR */}
        <section className="dev-section">
          <h2>About Page</h2>
          <div className="input-group">
            <label>Subtitle</label>
            <input type="text" value={content.about.subtitle} onChange={e => handleChange('about', 'subtitle', e.target.value)} />
          </div>
          <div className="input-group">
            <label>Paragraph 1</label>
            <textarea value={content.about.body1} onChange={e => handleChange('about', 'body1', e.target.value)} rows="4" />
          </div>
          <div className="input-group">
            <label>Paragraph 2</label>
            <textarea value={content.about.body2} onChange={e => handleChange('about', 'body2', e.target.value)} rows="4" />
          </div>
          <div className="input-group">
            <label>About Portrait Image URL</label>
            <input type="text" value={content.about.image} onChange={e => handleChange('about', 'image', e.target.value)} />
          </div>
        </section>

      </div>
    </div>
  );
};

export default DevDashboard;
