pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'build the application'
		 sh '''
		 	ls -ltrh
			npm install
			ls -ltrh
		 '''
            }
        }
        stage('Test') { 
            steps {
               echo 'test the application'
            }
        }
        stage('Deploy to Dev') {
		
         steps {
		 echo 'deploy the application'
		sh '''
		    cp * -Rf /var/www/devnode
		    
		    pm2 describe index > /dev/null
		    RUNNING=$?
		    if [ "${RUNNING}" -ne 0 ]; then
			pm2 start /var/www/devnode/index.js
		    else
			pm2 restart index
		    fi;
		 '''
		
         }
        }
        stage('Deploy to QA') { 
            steps {
		    
		    
                echo 'deploy the application qa env'
            }		
        }
	stage('Deploy to Prod') { 
            steps {
		    
                echo 'deploy the application prod env'
            }		
        }
    }
}
