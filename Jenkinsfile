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
		 pwd
		 ls -lrth
		echo 'test the application'
         }
        }
        stage('Deploy') { 
            steps {
                echo 'deploy the application'
            }
			
        }
    }
}