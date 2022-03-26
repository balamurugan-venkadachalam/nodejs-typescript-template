pipeline {
    agent any
    
    enviroment{
        PATH = "/home/bala/.nvm/versions/node/v16.9.1/bin/npm:"
    }
    
    stages {
        
        stage('build') {
            steps {
                echo 'build started'
                sh "npm run build"
            }
        }
        
        stage('build') {
            steps {
                echo 'test started'
                sh "npm run test"
            }
        }

    }
}
