pipeline {
    agent any
    stages {
         stage('Build') {
            steps {
                echo 'Building..'
            }
        }
        stage('Performance Testing') {
            steps {
                echo 'Running K6 performance tests...'
                sh 'k6 run loadtests/performance-test.js'
                echo 'Completed Running K6 performance tests!'
            }
        }
    }
}
