import React from 'react';
import './App.css';

function App() {
  return (    
    <div>
    <header className="header">
        <div className="container clearfix">                       
            <img className="profile-image img-fluid float-left" src="assets/images/profile.png" alt="Krupali" style={{borderRadius: '50%'}} height="200" width="200" />
            <div className="profile-content float-left">
                <h1 className="name">Krupali Makadiya</h1>
                <h2 className="desc">Full Stack Developer</h2>   
                <ul className="social list-inline">
                    <li className="list-inline-item"><a href="#"><i className="fab fa-twitter"></i></a></li>                   
                    <li className="list-inline-item"><a href="#"><i className="fab fa-google-plus-g"></i></a></li>
                    <li className="list-inline-item"><a href="https://www.linkedin.com/in/krupali-makadiya-458293129"><i className="fab fa-linkedin-in"></i></a></li>
                    <li className="list-inline-item"><a href="https://github.com/krupalimakadiya/"><i className="fab fa-github-alt"></i></a></li>    
                    <li className="list-inline-item"><a href="https://stackoverflow.com/users/8851203/krupali-makadiya"><i className="fab fa-stack-overflow"></i></a></li>   
                    <li className="list-inline-item last-item"><a href="#"><i className="fab fa-codepen"></i></a></li>                
                </ul> 
            </div>
            <a className="btn btn-cta-primary float-right" href="https://themes.3rdwavemedia.com/" target="_blank"><i className="fas fa-paper-plane"></i> Contact Me</a>              
        </div>
    </header> 
    <div className="container sections-wrapper">
        <div className="row">
            <div className="primary col-lg-8 col-12">
                <section className="about section">
                    <div className="section-inner">
                        <h2 className="heading">About Me</h2>
                        <div className="content">
                            <p>If the word "IMPOSSIBLE" itself saying " I AM POSSIBLE " Then how can I give up.<br/>
                            Yes, I am new bee but not new in my work. I am specialized in web development and software development using Node js, React js, Angular js, 
                            HTML5, CSS3, and MySQL, MongoDB technologies through the Express js platform.
                            <br/>
                            I am also do scraping using Puppeteer library which is provide headless browser.                                                        
                             <br/>                           
                            I believe in offering high quality services with regular and timely communication and hence my rates are more reasonable than other providers.
                            </p>
                         
                        </div>
                    </div>
                </section>
    
               <section className="latest section">
                    <div className="section-inner">
                        <h2 className="heading">Latest Projects</h2>
                        <div className="content">                                                   
                            <hr className="divider" />
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-1.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank">Instance - Bootstrap 4 Portfolio Theme for Aspiring Full Stack Developers</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/resume/instance-bootstrap-portfolio-theme-for-developers/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>
                            </div>
                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-2.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank">DevStudio - Bootstrap 4 Theme for WebDev Agencies and Freelance Developers</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/devstudio-bootstrap-theme-for-web-development-agencies-and-developers/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>
                            </div>
                            
                             <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-3.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank">Startup Kit - Bootstrap 4 Theme for SaaS Startups</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim, eget iaculis ante dolor non turpis.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/startupkit-bootstrap-theme-for-saas-startups/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>
                            </div>
                            
                            <div className="item row">
                                <a className="col-md-4 col-12" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">
                                <img className="img-fluid project-image" src="assets/images/projects/project-4.png" alt="project name" />
                                </a>
                                <div className="desc col-md-8 col-12">
                                    <h3 className="title"><a href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank">Nova Pro - Bootstrap 4 Theme for Mobile Startups</a></h3>
                                    <p className="mb-2">You can put one of your secondary projects here. Suspendisse in tellus dolor. Vivamus a tortor eu turpis pharetra consequat quis non metus.</p>
                                    <p><a className="more-link" href="https://themes.3rdwavemedia.com/bootstrap-templates/startup/bootstrap-template-for-mobile-apps-nova-pro/" target="_blank"><i className="fas fa-external-link-alt"></i>Find out more</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                                
                <section className="experience section">
                    <div className="section-inner">
                        <h2 className="heading">Work Experience</h2>
                        <div className="content">
                            <div className="item">
                                <h3 className="title">Co-Founder - <span className="place"><a href="#">Techno Girls</a></span> <span className="year">(Present)</span></h3>
                                <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.</p>
                            </div>
                            <div className="item">
                                <h3 className="title">Software Developer - <span className="place"><a href="#">Patoliya Infotech</a></span> <span className="year">(2013 - 2014)</span></h3>
                                <p>Vivamus a tortor eu turpis pharetra consequat quis non metus. Aliquam aliquam, orci eu suscipit pellentesque, mauris dui tincidunt enim. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna.</p>
                            </div>
                            
                            <div className="item">
                                <h3 className="title">Trainee Developer - <span className="place"><a href="#">Raksh Infotech</a></span> <span className="year">(2012 - 2013)</span></h3>
                                <p>Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.</p>
                            </div>
                            
                        </div>
                    </div>
                </section>
            </div>
            <div className="secondary col-lg-4 col-12">
                 <aside className="info aside section">
                    <div className="section-inner">
                        <h2 className="heading sr-only">Basic Information</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="fas fa-map-marker-alt"></i><span className="sr-only">Location:</span>Surat,Gujarat - India</li>
                                <li><i className="fas fa-envelope"></i><span className="sr-only">Email:</span><a href="https://mail.google.com/mail/u/0/#inbox?compose=new">krupalimakadiya123@gmail.com</a></li>
                                <li><i className="fas fa-link"></i><span className="sr-only">Website:</span><a href="https://krupalimakadiya.github.io/">https://www.website.com</a></li>
                            </ul>
                        </div>
                    </div>
                </aside>
                
                <aside className="skills aside section">
                    <div className="section-inner">
                        <h2 className="heading">Skills</h2>
                        <div className="content">
                            <p className="intro"></p>
                            
                            <div className="skillset">
                               
                                <div className="item">
                                    <h3 className="level-title">Node js<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">React js<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">Angular js &amp;<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>
                                </div>

                                <div className="item">
                                    <h3 className="level-title">MongoDB &amp; MySQL<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Expert</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="96%">
                                        </div>                                      
                                    </div>
                                </div>
                                
                                <div className="item">
                                    <h3 className="level-title">HTML, CSS, Javascript, jquery<span className="level-label" data-toggle="tooltip" data-placement="left" data-animation="true" title="You can use the tooltip to explain more about your skill level..."><i className="fas fa-info-circle"></i>Pro</span></h3>
                                    <div className="level-bar">
                                        <div className="level-bar-inner" data-level="85%">
                                        </div>                                      
                                    </div>
                                </div>
                            </div>              
                        </div>
                    </div>
                </aside>
                
                <aside className="testimonials aside section">
                    <div className="section-inner">
                        <h2 className="heading">Testimonials</h2>
                        <div className="content">
                            <div className="item">
                                <blockquote className="quote">                                  
                                    <p><i className="fas fa-quote-left"></i>James is an excellent software engineer and he is passionate about what he does. You can totally count on him to deliver your projects!</p>
                                </blockquote>                
                                <p className="source"><span className="name">Tim Adams</span><br /><span className="title">Curabitur commodo</span></p>                                                             
                            </div>                            
                            <p><a className="more-link" href="#"><i className="fas fa-external-link-alt"></i>More on Linkedin</a></p>                             
                        </div>
                    </div>
                </aside>
                
                <aside className="education aside section">
                    <div className="section-inner">
                        <h2 className="heading">Education</h2>
                        <div className="content">
                            <div className="item">                      
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> MSc Computer Science</h3>
                                <h4 className="university">University College London <span className="year">(2011-2012)</span></h4>
                            </div>
							          <div className="item">
                                <h3 className="title"><i className="fas fa-graduation-cap"></i> BCA Computer Science</h3>
                                <h4 className="university">VNSGU<span className="year">(2015-2018)</span></h4>
                            </div>
                        </div>
                    </div>
                </aside>
                            
                <aside className="languages aside section">
                    <div className="section-inner">
                        <h2 className="heading">Languages</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li className="item">
                                    <span className="title"><strong>English:</strong></span>
                                    <span className="level">Native Speaker <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> </span>
                                </li>
                                <li className="item">
                                    <span className="title"><strong>Hindi:</strong></span>
                                    <span className="level">Professional Proficiency <br className="visible-sm visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                </li>
								<li className="item">
                                    <span className="title"><strong>Gujarati:</strong></span>
                                    <span className="level">Professional Proficiency <br className="visible-xs"/><i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i> <i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
                
                {/* <aside className="list conferences aside section">
                    <div className="section-inner">
                        <h2 className="heading">Conferences</h2>
                        <div className="content">
                            <ul className="list-unstyled">
                                <li><i className="far fa-calendar-alt"></i> <a href="#" target="_blank">WWDC 2020</a> (San Francisco)</li>
                                <li><i className="far fa-calendar-alt"></i> <a href="#">Hive</a> (Seattle)</li>
                            </ul>
                        </div>
                    </div>
                </aside> */}
            </div>
        </div>
    </div>
    
    
    <footer className="footer">
        <div className="container text-center">    
                <small className="copyright">Designed with <i className="fas fa-heart"></i> by <a href="https://themes.3rdwavemedia.com" target="_blank">Xiaoying Riley</a> for developers</small>
        </div>
    </footer>    
    </div>
  );
}

export default App;
