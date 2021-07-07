// Контекст выполнения

// Перед выполнением JavaScript-кода создаётся контекст выполнения.
// В процессе его создания выполняются три действия

// 1. this binding - Определяется значение this
// 2. Creation of LexicalEnvironment Component - создается лексическое окружение
// 2. Creation of VariableEnvironment Component - создается окружение переменных

GlobalExecutionContext = {
    ThisBinding = <this value>
    LexicalEnvironment = {
        OuterEnvironmentRecord = <null>
        EnvironmentRecord = {
            Type: Object
            // переменные и функции хранятся как свойства и методы глобально объекта
        }
    }
    VariableEnvironment = {
       // Аналогично LexicalEnvironment только хранит переменные объявленные через var
    }
}

FunctionExecutionContext = {
    ThisBinding = <this value>
    LexicalEnvironment = {
        OuterEnvironmentRecord = {...}
        EnvironmentRecord = {
            Type: Declarative
            let, const, function
            // переменные и функции хнарятся по обычному
        }
    }
    VariableEnvironment = {
        // Аналогично LexicalEnvironment только хранит переменные объявленные через var
    }
}

this - Всегда ссылается на объект в котором была вызвана и не только :)

LexicalEnvironment - Содержит в себе все переменные и функции
текущего контекста выполенния (execution context), а так-же ссылку на внешнее
лексическое окружение
