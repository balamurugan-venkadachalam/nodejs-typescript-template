pipeline {
    agent any

//    environment {
//        PATH = "/home/bala/.nvm/versions/node/v16.9.1/bin/npm:"
//    }
    
    stages {
        
        stage('npm install') {
            steps {
                echo 'npm install started'
                sh "npm install"
               
            }
        } 
        stage('build') {
            steps {
                echo 'npm build started'
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
