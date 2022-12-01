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
		sh 'node test'
            }
        }
        stage('Deploy to Dev') {
         steps {
		 echo 'deploy the application'
		sh '''
                    cp . /home/ec2-user/devnode
		    npm restart all
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
