pipeline {
    agent any

    environment {
        PATH = "/home/bala/.nvm/versions/node/v16.9.1/bin/npm:"
    }
    
    stages {
        
        stage('build') {
            steps {
                echo 'build started'
                sh "npm install"
                sh "npm run build"
            }
        }
        
        stage('test') {
            steps {
                echo 'test started'
                sh "npm run test"
            }
        }

    }
}
