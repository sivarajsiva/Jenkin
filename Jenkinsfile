pipeline {
    agent any 
    stages {
        stage('Build') { 
            steps {
                echo 'build the application'
            }
        }
        stage('Test') { 
            steps {
               echo 'test the application'
            }
        }
        stage('Deploy to Dev') {
         steps {
		 echo 'deploy the application to dev env'
		
         }
        }
        stage('Deploy') { 
            steps {
		    
                echo 'deploy the application qa env'
            }		
        }
	stage('Deploy') { 
            steps {
		    
                echo 'deploy the application prod env'
            }		
        }
    }
}
