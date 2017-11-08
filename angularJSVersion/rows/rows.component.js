angular.
  module('rows', []).
  component('rows', {
    templateUrl: 'rows/rows.template.js',
    controller: function RowsController() {
      this.rows=[
        {
          header: 'About Me',
          number: '1'
        },{
          header: 'Education',
          number: '2'
        },{
          header: 'Work Experience',
          number: '3'
        },{
          header: 'Activities',
          number: '4'
        },{
          header: 'Accolades/Achievements',
          number: '5'
        },{
          header: 'Notable Courses Taken',
          number: '6'
        }
      ]
      this.colleges = [
        {
          name: 'Emory University',
          degree: 'Bachelor of Science in Computer Science',
          duration: 'Graduation: August 2017'
        },{
          name: 'Georgia State University',
          degree: 'Bachelor of Science in Computer Science',
          duration: 'Fall 2013 – Spring 2014 (Transfer away)'
        }
      ]
      this.experiences = [
        {
          company: "Overlay Technology",
          position: "Software Engineering Intern",
          duration: "Jun 2017-Aug 2017",
          location: "SINGAPORE, SG",
          skills: "Developed the front end of the first iteration for the web interface in Angular2 that served as a compliment to the AR Android app. Able to connect the login to the Django Rest Framework, and documented coding methods to ease further implementations. Project was not hosted on Github until later end of development, but approximately 15-20 files were created. Debugged and implemented dragging on Vuforia Android application."
        },{
          company: "Emory Libraries and Information Technology",
          position: "Student Technology Support Technician",
          duration: "Jan 2016 – Jun 2017",
          location: "ATLANTA, GA",
          skills: "Troubleshooting for both Mac & Windows operating systems. Wireless connectivity, software installs, email setup/support. Malicious software removal, software and hardware diagnostics, parts replacements. Assess electronic tickets for over 30 students weekly with various technical and software issues through walk-ins and appointments. Consult with students and staff on improving technical experience and repairing hardware and on-campus software issues. Initiate group discussions with team and supervisor to resolve uncommon software issues and difficult technical repairs. Manage updates on software applications and office drives while addressing any office concerns in a fast-paced environment."
        },{
          company: "Harris Corporation",
          position: "Hyperion Team: Software Engineering Intern",
          duration: "May 2016 – July 2016",
          location: "MELBOURNE, FL",
          skills: "Developed a complex Jython script to standardize Excel files for data integration within commercial Oracle product, FDMEE. Created a Jython testing environment, imported external Apache Libraries to perform XLSX data extraction, performed extensive debugging and ultimately reduced average load times from a 30-minute manual effort to a 6-minute automated effort. Created a Powershell script that inputs a text file and generates several batch files used for Production application backups. This script enhances this process by reducing average time from 30 minutes (manual update) to 5 minutes (one-click). Researched Hyperion Suite from Hyperion Consulting videos and oracle documentation particularly: Hyperion Planning, Smart View, HTP, Essbase Calc, Financial Reporting, and FDMEE."
        },{
          company: "Shell",
          position: "Retail IT Intern III",
          duration: "May 2015 - Aug 2015",
          location: "HOUSTON,TX",
          skills: "Applied Continuous Improvement techniques to simplify Shell’s Retail IT Continuous Improvement site. Identified inconsistencies in FCR data and provided potential solutions to the problems. Networked and collaborated with in-house experts to identify solutions to day to day tasks. Worked with a team to find tools and practices for improving communication in Shell"
        }
      ]
      this.courses = [ 'Data Structures and Algorithms','Computing for Bioinformatics','Software Engineering','Computational Linguistics','Computer Science Practicum','Database Systems','Systems Programming','Artificial Intelligence','Data Mining','Theory of Computing']
      this.jobs = ['Software Engineering', 'Systems Engineering', 'Project Management','Consulting']
      this.languages = ['Java','Front End(JavaScript, CSS, HTML, AngularJS, Angular)','Back End(PHP, AJAX, SQL/MySQL/Postgresql, Django)','Python','Git','Powershell','Jython','Linux','C']
      this.ides = ['Eclipse','Notepad++','Pycharm','ATOM','Windows PowerShell ISE', 'Android Studio']
    }
  });
