pipeline {
	agent { label 'jenkin-ec2-agent' }
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
		    
		   pm2 restart index
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
