pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'build the application'
		 sh 'npm install'
            }
        }
        stage('Test') { 
            steps {
               echo 'test the application'
		//sh 'node test'
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
        stage('Deploy') { 
            steps {
		    
                echo 'deploy the application'
            }
			
        }
    }
}
