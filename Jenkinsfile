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
		sh '''
                    echo "Multiline shell steps works too"
                    ls -lah
                '''
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
