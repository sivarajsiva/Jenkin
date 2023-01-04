pipeline{
	agent any
	stages {

		stage('Build Node Js Project'){
			steps{
				echo "Application build Start"
				sh '''
					ls -ltrh
					npm install
					ls -ltrh
				'''				
				echo "Application build End"
			}
		}
		
		stage('Test the Application'){
			steps{
				echo "Application test Start"

				echo "Application test End"
			}
		}
		
		stage('Deploy to Dev env'){
			steps{
				echo "Application Deployment Start"
				sh '''
				cp * -Rf /var/www/devnode
				pm2 restart index
				'''
				echo " pm2 restart index Application Deployment End"
			}
		}

	}

}
