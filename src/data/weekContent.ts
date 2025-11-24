export interface WeekContent {
  id: string;
  title: string;
  content: {
    summary: string;
    development: {
      sections: Array<{
        title: string;
        content: string;
      }>;
    };
    examples: Array<{
      title: string;
      code: string;
      language: string;
      description?: string;
    }>;
    diagrams?: Array<{
      title: string;
      description?: string;
    }>;
    reflection?: string;
  };
}

export const weekContents: Record<string, WeekContent> = {
  "1": {
    id: "1",
    title: "SEMANA 1 - Recursividad",
    content: {
      summary:
        "La recursividad representa un paradigma de programación en el cual una función tiene la capacidad de invocarse a sí misma durante su ejecución. Esta aproximación permite abordar problemas complejos fragmentándolos en instancias más reducidas y manejables del mismo desafío.\n\nSe trata de una herramienta esencial en el diseño de algoritmos, particularmente efectiva cuando trabajamos con estructuras que exhiben **patrones repetitivos o anidados**, tales como estructuras de árboles, algoritmos de búsqueda y ordenamiento, generación de permutaciones, y funciones matemáticas que se definen de forma recursiva.\n\nEl propósito de esta semana consistió en adquirir una comprensión sólida de la recursión, aprender a reconocer situaciones donde su aplicación resulta beneficiosa, y entender el mecanismo de la *pila de llamadas* que subyace a su funcionamiento.",
      development: {
        sections: [
          {
            title: "Definición y concepto de recursividad",
            content:
              "La recursividad es un método de resolución de problemas donde la solución se construye a partir de soluciones a versiones más pequeñas del mismo problema. Una función recursiva es aquella que, durante su ejecución, realiza una llamada a sí misma.\n\nLa clave está en que cada invocación trabaja con un conjunto de datos más reducido, aproximándose gradualmente hacia una situación trivial que puede resolverse directamente sin necesidad de más recursión.",
          },
          {
            title: "Elementos esenciales de la recursión",
            content:
              "Para que una función recursiva funcione correctamente, debe contar con tres elementos fundamentales:\n\n1. **Condición de parada (caso base):** Es el escenario más simple del problema que puede resolverse sin recurrir a más llamadas recursivas. Sin esta condición, la función entraría en un bucle infinito.\n\n2. **Llamada recursiva:** Es la parte donde la función se invoca a sí misma, pero con parámetros modificados que representan una versión más pequeña del problema original.\n\n3. **Reducción del problema:** Cada llamada recursiva debe trabajar con una instancia más pequeña del problema, garantizando que eventualmente se alcance el caso base.",
          },
          {
            title: "Ilustración práctica: Secuencia de Fibonacci",
            content:
              "Un ejemplo clásico que demuestra la recursividad es el cálculo de números de Fibonacci. La secuencia se define como:\n\n```\nfib(n) = fib(n-1) + fib(n-2)\n```\n\nCon casos base:\n\n```\nfib(0) = 0\nfib(1) = 1\n```\n\nEste ejemplo muestra cómo un problema aparentemente complejo se descompone en subproblemas más simples que siguen la misma lógica, hasta llegar a los casos base que tienen solución inmediata.",
          },
          {
            title: "Mecanismo interno: La pila de ejecución",
            content:
              "Cuando una función recursiva se ejecuta, cada llamada se almacena en una estructura llamada pila de ejecución (call stack). Esta pila mantiene el contexto de cada invocación pendiente.\n\n**Trazado de ejecución para fibonacci(5):**\n\n1. Se llama fibonacci(5)\n2. Esta requiere fibonacci(4) y fibonacci(3)\n3. fibonacci(4) requiere fibonacci(3) y fibonacci(2)\n4. fibonacci(3) requiere fibonacci(2) y fibonacci(1)\n5. fibonacci(2) requiere fibonacci(1) y fibonacci(0)\n6. fibonacci(1) y fibonacci(0) retornan directamente (casos base)\n\nA medida que se resuelven los casos base, la pila se desapila y cada función retorna su resultado, permitiendo que las llamadas anteriores completen su cálculo. Este comportamiento de *último en entrar, primero en salir* (LIFO) es característico de las pilas, estructura de datos que explorarás más adelante.",
          },
        ],
      },
      examples: [
        {
          title: "Cálculo recursivo de Fibonacci",
          language: "java",
          code: `public class Fibonacci {

    public static int fibonacci(int n) {
        // Casos base
        if (n == 0) return 0;
        if (n == 1) return 1;
        
        // Llamada recursiva
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(7)); // Output: 13
    }
}`,
        },
        {
          title: "Conteo regresivo recursivo",
          language: "java",
          code: `public static void contarRegresivo(int numero) {
    // Caso base: cuando llegamos a 0, detenemos
    if (numero < 0) return;
    
    System.out.println(numero);
    contarRegresivo(numero - 1); // Llamada recursiva
}`,
        },
        {
          title: "Búsqueda binaria recursiva",
          language: "java",
          code: `public static int busquedaBinaria(int[] arr, int objetivo, int inicio, int fin) {
    // Caso base: elemento no encontrado
    if (inicio > fin) return -1;
    
    int medio = (inicio + fin) / 2;
    
    // Caso base: elemento encontrado
    if (arr[medio] == objetivo) return medio;
    
    // Llamadas recursivas según comparación
    if (arr[medio] > objetivo) {
        return busquedaBinaria(arr, objetivo, inicio, medio - 1);
    } else {
        return busquedaBinaria(arr, objetivo, medio + 1, fin);
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Representación del árbol de llamadas recursivas",
          description:
            "Diagrama que ilustra cómo se expande un árbol de llamadas recursivas, mostrando cada invocación como un nodo y las dependencias entre ellas hasta llegar a los casos base.",
        },
      ],
      reflection:
        "Al finalizar esta semana, pude apreciar que la recursividad trasciende ser simplemente una técnica de programación; constituye una forma distinta de conceptualizar y abordar problemas. Me permitió visualizar cómo problemas aparentemente complejos pueden descomponerse sistemáticamente en versiones más simples.\n\nAprendí aspectos críticos:\n\n- La ausencia de un caso base bien definido conduce inevitablemente a un desbordamiento de pila (stack overflow).\n\n- La eficiencia de la recursión depende directamente de cómo se reduce el tamaño del problema en cada llamada.\n\n- Aunque elegante y expresiva, la recursión puede ser costosa en términos de memoria y tiempo de ejecución, especialmente cuando se generan múltiples llamadas redundantes.\n\nEsta base conceptual será fundamental para entender aplicaciones más avanzadas como el recorrido de árboles, la resolución de problemas de optimización, y algoritmos de divide y vencerás.",
    },
  },
  "2": {
    id: "2",
    title: "SEMANA 2 - Recursividad Aplicada: Fibonacci y Torres de Hanoi",
    content: {
      summary:
        "Esta semana exploré aplicaciones prácticas de la recursividad mediante dos problemas emblemáticos: la secuencia de Fibonacci y el rompecabezas de las Torres de Hanoi. Estos casos de estudio revelan aspectos fundamentales del diseño recursivo y sus implicaciones computacionales.\n\nLa **implementación de Fibonacci** ilustra recursividad múltiple, donde una única invocación genera dos nuevas llamadas recursivas, creando una estructura de árbol de dependencias. Este patrón demuestra cómo la recursión puede conducir a complejidad exponencial cuando no se optimiza adecuadamente.\n\nPor otro lado, las **Torres de Hanoi** representan un ejemplo paradigmático de descomposición recursiva, donde un problema aparentemente complejo se simplifica mediante una estrategia elegante que reduce sistemáticamente el tamaño del problema hasta alcanzar el caso base.\n\nEl análisis de ambos problemas proporcionó insights valiosos sobre eficiencia algorítmica, gestión de memoria en la *pila de ejecución*, y las consideraciones de complejidad temporal y espacial inherentes a soluciones recursivas.",
      development: {
        sections: [
          {
            title: "La secuencia de Fibonacci como modelo recursivo",
            content:
              "La secuencia de Fibonacci constituye uno de los ejemplos más ilustrativos de recursividad múltiple. Matemáticamente, cada término se obtiene sumando los dos anteriores:\n\n```\nF(0) = 0\nF(1) = 1\nF(n) = F(n-1) + F(n-2) para n > 1\n```\n\nLo que hace a Fibonacci particularmente relevante desde la perspectiva recursiva es que cada cálculo depende de dos subcálculos previos, generando una estructura arbórea donde cada nodo se ramifica en dos descendientes. Esta característica convierte a Fibonacci en un caso de estudio ideal para comprender el crecimiento exponencial de operaciones.",
          },
          {
            title: "Análisis de complejidad en la recursión múltiple",
            content:
              "Al implementar Fibonacci de forma recursiva pura, cada llamada a `fibonacci(n)` requiere calcular `fibonacci(n-1)` y `fibonacci(n-2)`. Esto genera un árbol de recursión donde muchos cálculos se repiten múltiples veces.\n\n**Ejemplo de repetición de cálculos:**\n\nPara calcular `fibonacci(5)`, se requiere `fibonacci(4)` y `fibonacci(3)`. A su vez, `fibonacci(4)` necesita `fibonacci(3)` y `fibonacci(2)`. Notamos que `fibonacci(3)` se calcula dos veces, `fibonacci(2)` se calcula tres veces, y así sucesivamente.\n\nEsta redundancia conduce a una complejidad temporal de O(2ⁿ), donde n representa el valor del término deseado. Este comportamiento exponencial es uno de los principales desafíos que deben abordarse mediante técnicas de optimización como memoización o programación dinámica.",
          },
          {
            title: "El problema de las Torres de Hanoi",
            content:
              "Las Torres de Hanoi es un rompecabezas matemático que consiste en tres postes y un número determinado de discos de diferentes tamaños apilados inicialmente en el primer poste, ordenados de mayor a menor. El objetivo es mover todos los discos al tercer poste, respetando tres reglas fundamentales:\n\n1. Solo se puede mover un disco a la vez\n2. Un disco más grande nunca puede colocarse sobre uno más pequeño\n3. Se debe utilizar el poste intermedio como auxiliar cuando sea necesario\n\nLa solución recursiva emerge del siguiente razonamiento: para mover n discos desde el origen al destino, primero debemos mover n-1 discos al poste auxiliar, luego mover el disco más grande al destino, y finalmente mover los n-1 discos desde el auxiliar al destino.",
          },
          {
            title: "Descomposición recursiva en Hanoi",
            content:
              "La elegancia de la solución recursiva para Hanoi radica en que el problema de mover n discos se reduce naturalmente a tres subproblemas más pequeños:\n\n1. **Paso 1:** Mover n-1 discos del poste origen al poste auxiliar (usando destino como auxiliar temporal)\n2. **Paso 2:** Mover el disco más grande directamente del origen al destino\n3. **Paso 3:** Mover los n-1 discos del auxiliar al destino (usando origen como auxiliar temporal)\n\nEl caso base ocurre cuando n = 1, momento en el cual simplemente movemos el disco directamente del origen al destino. Esta descomposición garantiza que cada subproblema sea más simple que el anterior, asegurando que eventualmente se alcance el caso base.",
          },
          {
            title: "Visualización del stack en problemas recursivos complejos",
            content:
              "Tanto Fibonacci como Hanoi generan múltiples llamadas recursivas que se acumulan en la pila de ejecución. En el caso de Fibonacci, cada nivel del árbol de recursión puede generar hasta 2^n llamadas pendientes simultáneamente en diferentes puntos de la ejecución.\n\nPara Hanoi, aunque la profundidad del stack es lineal (n niveles), la estructura de llamadas muestra cómo cada problema de n discos genera dos subproblemas de n-1 discos, que a su vez generan dos más, creando una estructura que, aunque controlada, ilustra perfectamente el concepto de descomposición jerárquica.\n\nComprender cómo estas llamadas se apilan y desapilan proporciona una intuición valiosa sobre la gestión de memoria y los límites prácticos de las soluciones recursivas sin optimización.",
          },
        ],
      },
      examples: [
        {
          title: "Implementación recursiva de Fibonacci con comentarios detallados",
          language: "java",
          code: `public class FibonacciRecursivo {

    public static int calcularFibonacci(int n) {
        // Casos base: los primeros dos términos de la secuencia
        if (n == 0) {
            return 0;
        }
        if (n == 1) {
            return 1;
        }
        
        // Caso recursivo: cada término es la suma de los dos anteriores
        // Nota: esto genera dos llamadas recursivas independientes
        return calcularFibonacci(n - 1) + calcularFibonacci(n - 2);
    }

    public static void main(String[] args) {
        int resultado = calcularFibonacci(8);
        System.out.println("F(8) = " + resultado); // Output: F(8) = 21
    }
}`,
        },
        {
          title: "Solución completa de Torres de Hanoi con seguimiento",
          language: "java",
          code: `public class TorresHanoi {

    public static void resolverHanoi(int cantidadDiscos, 
                                     char posteOrigen, 
                                     char posteDestino, 
                                     char posteAuxiliar) {
        // Caso base: mover el único disco restante
        if (cantidadDiscos == 1) {
            System.out.println("Mover disco desde " + posteOrigen + 
                             " hacia " + posteDestino);
            return;
        }
        
        // Paso 1: Mover n-1 discos al poste auxiliar
        resolverHanoi(cantidadDiscos - 1, posteOrigen, 
                     posteAuxiliar, posteDestino);
        
        // Paso 2: Mover el disco más grande al destino
        System.out.println("Mover disco " + cantidadDiscos + 
                         " desde " + posteOrigen + 
                         " hacia " + posteDestino);
        
        // Paso 3: Mover n-1 discos del auxiliar al destino
        resolverHanoi(cantidadDiscos - 1, posteAuxiliar, 
                     posteDestino, posteOrigen);
    }

    public static void main(String[] args) {
        resolverHanoi(4, 'A', 'C', 'B');
    }
}`,
        },
        {
          title: "Versión alternativa: Fibonacci con validación de entrada",
          language: "java",
          code: `public static long fibonacciSeguro(int n) {
    // Validación de entrada
    if (n < 0) {
        throw new IllegalArgumentException(
            "El índice de Fibonacci debe ser no negativo"
        );
    }
    
    // Casos base
    if (n <= 1) {
        return n;
    }
    
    // Llamada recursiva doble
    return fibonacciSeguro(n - 1) + fibonacciSeguro(n - 2);
}`,
        },
      ],
      diagrams: [
        {
          title: "Estructura del árbol de recursión para Fibonacci",
          description:
            "Visualización que muestra cómo se expande el árbol de llamadas recursivas al calcular un término de Fibonacci, evidenciando las repeticiones de cálculos y el crecimiento exponencial del número de operaciones.",
        },
        {
          title: "Flujo de ejecución paso a paso para Torres de Hanoi",
          description:
            "Diagrama que representa la secuencia de movimientos generados recursivamente para resolver el problema de las Torres de Hanoi, mostrando la descomposición del problema y cómo cada llamada reduce el tamaño del desafío.",
        },
      ],
      reflection:
        "Esta semana me permitió profundizar significativamente en el entendimiento práctico de la recursividad. Fibonacci y Hanoi, aunque conceptualmente diferentes, comparten una característica fundamental: ambos demuestran cómo la recursión puede transformar problemas aparentemente complejos en soluciones elegantes y conceptualmente simples.\n\nLas lecciones más importantes que extraje fueron:\n\n- La recursividad múltiple, aunque poderosa, puede generar complejidad exponencial si no se optimiza. Fibonacci me enseñó que la elegancia del código no siempre garantiza eficiencia.\n\n- Hanoi me mostró cómo pensar recursivamente: en lugar de preocuparme por cada movimiento individual, aprendí a ver el problema como una estructura que se descompone naturalmente.\n\n- Ambos problemas reforzaron mi comprensión del stack de llamadas. Visualizar cómo se acumulan y resuelven las llamadas recursivas me dio una intuición más clara sobre la gestión de memoria.\n\n- Comprendí que la recursión no es solo una herramienta de programación, sino una forma de modelar problemas. Esta perspectiva me será invaluable cuando aborde estructuras de datos más complejas como árboles y grafos, donde la recursión se vuelve prácticamente indispensable.\n\nLa experiencia con estos dos problemas clásicos sienta las bases para abordar algoritmos más sofisticados que utilizan recursión como componente fundamental.",
    },
  },
  "3": {
    id: "3",
    title: "SEMANA 3 - Pilas y Métodos de Pilas",
    content: {
      summary:
        "Esta semana me adentré en el estudio de las pilas (stacks), una estructura de datos lineal fundamental que opera bajo el principio LIFO (Last In, First Out - Último en Entrar, Primero en Salir). Esta estructura se encuentra presente en múltiples contextos de la programación y la computación.\n\nLas pilas son esenciales para el funcionamiento interno de los sistemas informáticos, siendo la base conceptual de procesos como la gestión de **llamadas a funciones** en el call stack, el mecanismo de **deshacer/rehacer** en aplicaciones, el **historial de navegación** en navegadores web, y la **evaluación de expresiones matemáticas** en notación postfija y prefija.\n\nDurante esta semana adquirí conocimientos sobre la implementación de pilas utilizando arreglos estáticos, comprendiendo la gestión adecuada de índices mediante un puntero denominado `top`, y aprendiendo a prevenir errores críticos como desbordamiento (overflow) y subdesbordamiento (underflow) de la estructura.",
      development: {
        sections: [
          {
            title: "Concepto y definición de pila",
            content:
              "Una pila es una estructura de datos lineal que restringe las operaciones de inserción y eliminación a un único extremo, conocido como el **tope** o **cima** de la pila. Esta restricción impone un orden específico de acceso a los elementos almacenados.\n\nLa característica principal es el principio LIFO: el último elemento agregado será el primero en ser removido, similar a una pila de platos donde solo puedes tomar el plato superior. Esta propiedad hace que las pilas sean ideales para situaciones donde necesitamos procesar elementos en orden inverso al de su inserción.",
          },
          {
            title: "Operaciones fundamentales de una pila",
            content:
              "Una pila proporciona un conjunto básico de operaciones que permiten manipular su contenido:\n\n1. **push(elemento):** Inserta un nuevo elemento en la parte superior de la pila. Esta operación incrementa el tamaño de la pila en uno.\n\n2. **pop():** Elimina y retorna el elemento que se encuentra en la parte superior. Si la pila está vacía, esta operación puede generar un error o retornar un valor especial.\n\n3. **peek() / top():** Permite examinar el elemento superior sin eliminarlo. Es útil para inspeccionar el contenido sin modificar la estructura.\n\n4. **isEmpty():** Verifica si la pila no contiene elementos. Retorna verdadero cuando la pila está vacía.\n\n5. **isFull():** Valida si la pila ha alcanzado su capacidad máxima (relevante para implementaciones con arreglos de tamaño fijo).\n\nTodas estas operaciones, en una implementación eficiente, tienen complejidad temporal de O(1), es decir, tiempo constante.",
          },
          {
            title: "Modelo conceptual y representación visual",
            content:
              "Conceptualmente, una pila puede visualizarse como un contenedor vertical donde los elementos se apilan uno sobre otro. Cada nuevo elemento se coloca en la parte superior, y solo el elemento superior es accesible directamente.\n\n**Analogía práctica:** Imagina una pila de libros sobre una mesa. Solo puedes agregar o quitar libros desde la parte superior. No puedes tomar un libro del medio sin mover primero los que están encima. Esta limitación es precisamente lo que define el comportamiento de una pila.\n\nLa representación gráfica muestra cómo cada operación `push` agrega un elemento en la cima, mientras que `pop` remueve el elemento más recientemente agregado.",
          },
          {
            title: "Implementación con arreglo estático",
            content:
              "La implementación de una pila mediante un arreglo de tamaño fijo requiere un control cuidadoso de índices para evitar desplazamientos innecesarios de elementos, a diferencia de otras estructuras lineales.\n\nLa estrategia clave es utilizar un único índice, tradicionalmente llamado `top`, que apunta a la posición del elemento más reciente en el arreglo. Cuando la pila está vacía, este índice se inicializa en -1, indicando que no hay elementos almacenados.\n\n**Ventajas de esta implementación:**\n\n- Acceso rápido y directo mediante índices\n- Gestión de memoria predecible\n- Operaciones en tiempo constante O(1)\n\n**Limitaciones:**\n\n- Capacidad máxima fija, lo que puede llevar a overflow si se excede\n- Desperdicio de memoria si el tamaño máximo no se utiliza completamente\n\nEsta aproximación es especialmente útil cuando conocemos de antemano el número máximo de elementos que necesitaremos almacenar.",
          },
          {
            title: "Manejo de condiciones límite: Overflow y Underflow",
            content:
              "Dos situaciones críticas deben manejarse adecuadamente en cualquier implementación de pila:\n\n**Stack Overflow:** Ocurre cuando intentamos insertar un elemento en una pila que ya ha alcanzado su capacidad máxima. En implementaciones con arreglo estático, esto sucede cuando `top` alcanza el índice `max - 1`. Sin un manejo adecuado, esto puede causar errores de acceso a memoria no válida.\n\n**Stack Underflow:** Se presenta cuando intentamos remover o acceder a un elemento de una pila que está vacía. Esto ocurre cuando `top == -1` y realizamos una operación `pop()` o `peek()` sin verificar previamente el estado de la pila.\n\nAmbos errores pueden prevenirse mediante validaciones antes de ejecutar las operaciones críticas, retornando valores especiales o lanzando excepciones apropiadas que indiquen el estado incorrecto de la estructura.",
          },
        ],
      },
      examples: [
        {
          title: "Implementación completa de Pila con arreglo",
          language: "java",
          code: `public class PilaEstatica {
    
    private int capacidadMaxima;
    private int indiceTop;
    private int[] elementos;
    
    // Constructor: inicializa la pila vacía
    public PilaEstatica(int tamanio) {
        capacidadMaxima = tamanio;
        indiceTop = -1;  // -1 indica pila vacía
        elementos = new int[capacidadMaxima];
    }
    
    // Verificar si la pila está vacía
    public boolean estaVacia() {
        return indiceTop == -1;
    }
    
    // Verificar si la pila está llena
    public boolean estaLlena() {
        return indiceTop == capacidadMaxima - 1;
    }
    
    // Insertar elemento en la parte superior
    public void apilar(int valor) {
        if (estaLlena()) {
            System.out.println("Error: Pila llena (Overflow)");
            return;
        }
        elementos[++indiceTop] = valor;
    }
    
    // Remover y retornar el elemento superior
    public int desapilar() {
        if (estaVacia()) {
            System.out.println("Error: Pila vacía (Underflow)");
            return -1;
        }
        return elementos[indiceTop--];
    }
    
    // Observar el elemento superior sin removerlo
    public int verTope() {
        if (estaVacia()) {
            System.out.println("Error: Pila vacía");
            return -1;
        }
        return elementos[indiceTop];
    }
}`,
        },
        {
          title: "Ejemplo de uso y demostración de operaciones",
          language: "java",
          code: `public static void main(String[] args) {
    // Crear una pila con capacidad para 5 elementos
    PilaEstatica miPila = new PilaEstatica(5);
    
    // Apilar varios elementos
    miPila.apilar(10);
    miPila.apilar(25);
    miPila.apilar(40);
    
    // Ver el elemento del tope sin removerlo
    System.out.println("Elemento en el tope: " + miPila.verTope()); // 40
    
    // Remover el elemento superior
    int removido = miPila.desapilar();
    System.out.println("Elemento removido: " + removido); // 40
    
    // Verificar el nuevo tope
    System.out.println("Nuevo tope: " + miPila.verTope()); // 25
    
    // Apilar más elementos
    miPila.apilar(55);
    miPila.apilar(70);
    
    // Intentar apilar en pila llena (generará error)
    miPila.apilar(85); // Error: Pila llena
}`,
        },
        {
          title: "Análisis de complejidad de operaciones",
          language: "java",
          code: `public class ComplejidadPila {
    
    // Todas estas operaciones tienen complejidad O(1)
    
    // push: O(1) - Inserción directa en índice conocido
    public void push(int x) {
        elementos[++top] = x;  // Acceso directo por índice
    }
    
    // pop: O(1) - Eliminación directa desde índice conocido
    public int pop() {
        return elementos[top--];  // Acceso directo por índice
    }
    
    // peek: O(1) - Acceso directo sin modificación
    public int peek() {
        return elementos[top];  // Lectura simple de índice
    }
    
    // isEmpty: O(1) - Comparación de una variable
    public boolean isEmpty() {
        return top == -1;  // Comparación constante
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Representación visual de operaciones de pila",
          description:
            "Diagrama que ilustra cómo funcionan las operaciones push y pop en una pila, mostrando el comportamiento del índice top y cómo los elementos se agregan y remueven desde la parte superior de la estructura.",
        },
        {
          title: "Estados de una pila durante operaciones",
          description:
            "Visualización que muestra los diferentes estados de una pila (vacía, con elementos, llena) y cómo el índice top cambia durante las operaciones de inserción y eliminación.",
        },
      ],
      reflection:
        "Esta semana consolidé mi comprensión de las pilas como una estructura de datos fundamental con aplicaciones prácticas extendidas. La conexión entre pilas y recursividad se volvió más clara al entender que cada llamada recursiva se gestiona mediante una pila de ejecución, donde cada nivel de recursión ocupa un espacio en el call stack.\n\nAspectos clave que internalicé:\n\n- Las pilas no son solo una estructura teórica; están presentes en prácticamente todos los programas en ejecución. El call stack que gestiona las llamadas a funciones es, conceptualmente, una pila.\n\n- La simplicidad de las operaciones O(1) hace que las pilas sean extremadamente eficientes para casos de uso específicos donde necesitamos procesar elementos en orden inverso.\n\n- El manejo cuidadoso de overflow y underflow es crucial para escribir código robusto. Estos errores pueden ser difíciles de detectar si no se implementan validaciones adecuadas.\n\n- La diferencia entre pilas y otras estructuras lineales como colas (FIFO) se volvió evidente. La elección entre estas estructuras depende completamente del problema que estamos resolviendo y del orden en que necesitamos procesar los datos.\n\nEsta base sólida en pilas me prepara para entender mejor cómo funcionan internamente los algoritmos de evaluación de expresiones, parsing, y navegación en árboles, donde las pilas juegan un papel fundamental.",
    },
  },
  "4": {
    id: "4",
    title: "SEMANA 4 - Implementación de Pilas y Métodos Avanzados",
    content: {
      summary:
        "Esta semana me enfoqué en desarrollar una implementación profesional y completa de pilas en Java, trascendiendo los métodos básicos para incorporar funcionalidades avanzadas y robustas. El objetivo fue transformar la pila de un concepto abstracto en una estructura de datos completamente funcional y lista para uso práctico.\n\nDurante esta semana adquirí competencias en múltiples aspectos críticos:\n\n- Gestión precisa del puntero `top` para mantener la integridad de la estructura\n- Implementación de validaciones robustas para prevenir condiciones de error como *underflow* y *overflow*\n- Desarrollo de métodos auxiliares extendidos como `size()`, `clear()`, `search()` y `print()` que enriquecen la funcionalidad de la pila\n- Aplicación de principios de ingeniería de software para estructuras estáticas\n- Análisis comparativo entre implementaciones *estáticas* basadas en arreglos versus implementaciones *dinámicas* utilizando listas enlazadas\n\nEsta semana representó un salto cualitativo: desde entender la pila como concepto teórico hasta dominar su implementación práctica con todas las consideraciones que esto implica en el desarrollo de software real.",
      development: {
        sections: [
          {
            title: "La complejidad detrás de una implementación profesional",
            content:
              "Implementar una pila de manera profesional va más allá de codificar métodos `push` y `pop`. Requiere una comprensión profunda de múltiples aspectos:\n\n**Gestión del índice top:** El puntero `top` debe mantenerse consistente en todas las operaciones. Un error en su manejo puede resultar en pérdida de datos o acceso a memoria inválida.\n\n**Prevención de errores de límites:** Es crucial validar que el arreglo nunca exceda sus límites. El overflow ocurre cuando intentamos insertar en una pila llena, mientras que el underflow se presenta al intentar remover de una pila vacía.\n\n**Validación de operaciones:** Cada método debe verificar el estado de la pila antes de ejecutar su lógica principal. Esto previene estados inconsistentes y errores en tiempo de ejecución.\n\n**Integridad del estado interno:** La pila debe mantener su invariante en todo momento. Es decir, si la pila está vacía, `top` debe ser -1, y si tiene n elementos, `top` debe ser n-1.\n\nLa conexión con conceptos anteriores (recursividad y call stack) se vuelve tangible al entender que el stack interno de Java maneja estas mismas preocupaciones, pero ahora desde la perspectiva del implementador.",
          },
          {
            title: "Métodos auxiliares y funcionalidades extendidas",
            content:
              "Una implementación completa de pila incluye métodos que facilitan su uso y proporcionan información sobre su estado:\n\n**size():** Retorna el número actual de elementos en la pila. Se calcula como `top + 1`, donde -1 representa una pila vacía.\n\n**clear():** Vacía completamente la pila reseteando el índice `top` a -1. No es necesario eliminar físicamente los elementos del arreglo; simplemente marcamos la pila como vacía.\n\n**search(elemento):** Busca un elemento en la pila y retorna su posición desde el tope (1 = tope, 2 = segundo elemento, etc.). Si no se encuentra, retorna -1. Este método recorre la pila desde el tope hacia abajo.\n\n**print():** Permite visualizar el contenido completo de la pila, facilitando la depuración y el entendimiento del estado actual. Es útil para propósitos educativos y de desarrollo.\n\nEstos métodos complementarios hacen que la pila sea más usable y profesional, siguiendo patrones similares a los encontrados en las colecciones estándar de Java.",
          },
          {
            title: "Pila estática vs pila dinámica: análisis comparativo",
            content:
              "Existen dos enfoques principales para implementar pilas, cada uno con sus ventajas y limitaciones:\n\n**Pila Estática (Arreglo):**\n\n- Utiliza un arreglo de tamaño fijo predefinido\n- Ofrece acceso directo mediante índices, resultando en operaciones O(1)\n- Tiene riesgo de overflow cuando se alcanza la capacidad máxima\n- Requiere conocer o estimar el tamaño máximo de antemano\n- Consume memoria de forma predecible, pero puede desperdiciar espacio si no se utiliza completamente\n- Implementación más simple y directa\n\n**Pila Dinámica (Lista Enlazada):**\n\n- Utiliza nodos enlazados que se crean dinámicamente\n- No tiene límite de tamaño teórico; crece según se necesite\n- No presenta riesgo de overflow relacionado con capacidad fija\n- Cada operación sigue siendo O(1), pero con overhead de gestión de memoria\n- Solo consume memoria para los elementos actualmente almacenados\n- Requiere manejo de punteros y puede fragmentar memoria\n- Más flexible pero más compleja de implementar\n\nLa elección entre una u otra depende del contexto: pilas estáticas para cuando conocemos el tamaño máximo, y pilas dinámicas para cuando el tamaño es impredecible o variable.",
          },
          {
            title: "Implementación dinámica con lista enlazada",
            content:
              "Una pila dinámica utiliza una lista enlazada donde cada nodo contiene un dato y una referencia al siguiente nodo. El tope de la pila corresponde al primer nodo de la lista.\n\n**Estructura de nodo:** Cada nodo encapsula un valor y un puntero al siguiente nodo. El último nodo apunta a `null`, indicando el final de la estructura.\n\n**Operación push:** Se crea un nuevo nodo cuyo siguiente puntero apunta al actual tope, luego se actualiza el tope para que apunte al nuevo nodo. Esta operación es O(1) y no requiere validación de capacidad.\n\n**Operación pop:** Se obtiene el dato del nodo tope, se actualiza el tope para que apunte al siguiente nodo, y se retorna el dato. Si el tope es `null`, la pila está vacía.\n\n**Ventajas de esta aproximación:** Elimina completamente el problema de overflow relacionado con capacidad fija, permite crecer indefinidamente, y solo consume memoria proporcional al número de elementos almacenados.\n\n**Consideraciones:** Requiere gestión explícita de memoria (aunque en Java el garbage collector maneja la liberación automáticamente), y tiene un overhead ligeramente mayor debido a la indirección de punteros.",
          },
        ],
      },
      examples: [
        {
          title: "Implementación completa de Pila con métodos avanzados",
          language: "java",
          code: `public class PilaCompleta {
    
    private int[] elementos;
    private int tope;
    private int capacidad;
    
    public PilaCompleta(int tamanio) {
        capacidad = tamanio;
        elementos = new int[capacidad];
        tope = -1;
    }
    
    public boolean estaVacia() {
        return tope == -1;
    }
    
    public boolean estaLlena() {
        return tope == capacidad - 1;
    }
    
    public void insertar(int valor) {
        if (estaLlena()) {
            System.out.println("Error: Overflow - no se puede insertar " + valor);
            return;
        }
        elementos[++tope] = valor;
    }
    
    public int remover() {
        if (estaVacia()) {
            System.out.println("Error: Underflow - pila vacía");
            return -1;
        }
        return elementos[tope--];
    }
    
    public int verTope() {
        if (estaVacia()) {
            System.out.println("Pila vacía");
            return -1;
        }
        return elementos[tope];
    }
    
    public int tamanio() {
        return tope + 1;
    }
    
    public void vaciar() {
        tope = -1;
    }
    
    public int buscar(int elemento) {
        for (int i = tope; i >= 0; i--) {
            if (elementos[i] == elemento) {
                return tope - i + 1;
            }
        }
        return -1;
    }
    
    public void mostrar() {
        if (estaVacia()) {
            System.out.println("Pila vacía");
            return;
        }
        System.out.println("Elementos de la pila (desde el tope):");
        for (int i = tope; i >= 0; i--) {
            System.out.println("  [" + elementos[i] + "]");
        }
    }
}`,
        },
        {
          title: "Pila dinámica implementada con lista enlazada",
          language: "java",
          code: `class NodoPila {
    int valor;
    NodoPila siguiente;
    
    NodoPila(int valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

public class PilaDinamica {
    
    private NodoPila tope;
    
    public PilaDinamica() {
        this.tope = null;
    }
    
    public boolean estaVacia() {
        return tope == null;
    }
    
    public void insertar(int valor) {
        NodoPila nuevo = new NodoPila(valor);
        nuevo.siguiente = tope;
        tope = nuevo;
    }
    
    public int remover() {
        if (estaVacia()) {
            System.out.println("Error: Pila vacía");
            return -1;
        }
        int valor = tope.valor;
        tope = tope.siguiente;
        return valor;
    }
    
    public int verTope() {
        if (estaVacia()) {
            System.out.println("Error: Pila vacía");
            return -1;
        }
        return tope.valor;
    }
}`,
        },
        {
          title: "Ejemplo de uso con todas las funcionalidades",
          language: "java",
          code: `public static void main(String[] args) {
    PilaCompleta pila = new PilaCompleta(5);
    
    // Insertar elementos
    pila.insertar(10);
    pila.insertar(20);
    pila.insertar(30);
    
    // Ver tamaño actual
    System.out.println("Tamaño: " + pila.tamanio()); // 3
    
    // Buscar elemento
    int posicion = pila.buscar(20);
    System.out.println("Elemento 20 está en posición: " + posicion); // 2
    
    // Mostrar contenido
    pila.mostrar();
    
    // Remover elemento
    int removido = pila.remover();
    System.out.println("Removido: " + removido); // 30
    
    // Vaciar la pila
    pila.vaciar();
    System.out.println("¿Vacía? " + pila.estaVacia()); // true
}`,
        },
      ],
      diagrams: [
        {
          title: "Estructura interna de una pila estática",
          description:
            "Diagrama que muestra la organización interna de una pila implementada con arreglo, incluyendo la gestión del índice top y cómo los elementos se almacenan secuencialmente en memoria.",
        },
      ],
      reflection:
        "Esta semana marcó un punto de inflexión en mi comprensión del desarrollo de software. La implementación detallada de pilas me reveló que crear estructuras de datos robustas requiere mucho más que conocimiento teórico; exige atención meticulosa a detalles como gestión de estado, validación de operaciones, y mantenimiento de invariantes.\n\nLecciones fundamentales que extraje:\n\n- La gestión correcta del puntero `top` es absolutamente crítica. Un error aparentemente menor puede llevar a comportamientos impredecibles y difíciles de depurar.\n\n- La elección entre implementación estática y dinámica no es trivial. Depende de factores como el conocimiento del tamaño máximo, restricciones de memoria, y requisitos de rendimiento del sistema.\n\n- Implementar métodos auxiliares como `search()` y `print()` no solo mejora la usabilidad, sino que también me ayudó a entender mejor cómo funcionan internamente las colecciones estándar de Java.\n\n- Esta experiencia me enseñó a pensar más allá del código funcional; a considerar casos límite, manejo de errores, y diseño de APIs claras.\n\nPor primera vez sentí que conecté teoría, implementación y eficiencia de manera práctica. Esta base me acerca a pensar como un ingeniero de software, considerando no solo cómo resolver problemas, sino cómo crear soluciones mantenibles, robustas y eficientes.",
    },
  },
  "5": {
    id: "5",
    title: "SEMANA 5 - Colas",
    content: {
      summary:
        "Esta semana exploré las colas (queues), una estructura de datos lineal fundamental que opera bajo el principio FIFO (First In, First Out - Primero en Entrar, Primero en Salir). Esta estructura complementa las pilas y amplía el repertorio de herramientas disponibles para resolver problemas algorítmicos.\n\nLas colas son esenciales para modelar numerosos escenarios del mundo real y computacional:\n\n- **Sistemas de gestión de turnos** donde se requiere procesar elementos en orden de llegada\n- **Planificación de procesos** en sistemas operativos, donde los procesos se ejecutan según su orden de llegada\n- **Programación concurrente** para manejar tareas y mensajes en orden\n- **Simulación de eventos discretos** donde los eventos se procesan cronológicamente\n- **Colas de impresión** en sistemas que gestionan trabajos de impresión\n- **Control de flujos de datos** en redes y sistemas distribuidos\n\nDurante esta semana estudié tres estrategias principales de implementación:\n\n1. **Cola estática con arreglo** - Implementación manual que proporciona control total y entendimiento profundo\n2. **Cola dinámica con LinkedList** - Utilizando las colecciones estándar de Java para flexibilidad\n3. **Cola optimizada con ArrayDeque** - La implementación recomendada en Java por su eficiencia\n\nCada aproximación presenta ventajas y limitaciones específicas en términos de eficiencia, uso de memoria, y facilidad de implementación.",
      development: {
        sections: [
          {
            title: "Concepto y definición de cola",
            content:
              "Una cola es una estructura de datos lineal que restringe las operaciones de inserción y eliminación a extremos opuestos. Los elementos se insertan por un extremo (llamado **final** o **rear**) y se eliminan por el otro extremo (llamado **frente** o **front**).\n\nEl principio FIFO garantiza que el primer elemento que ingresó será el primero en ser procesado, similar a una fila de personas esperando un servicio. Esta propiedad hace que las colas sean ideales para situaciones donde el orden de procesamiento debe respetar el orden de llegada.\n\n**Analogía práctica:** Imagina una fila en un banco. Las personas llegan y se forman al final de la fila (enqueue). El cajero atiende a la persona que está al frente (dequeue). Nadie puede ser atendido sin antes haber esperado su turno, lo cual es exactamente el comportamiento de una cola.",
          },
          {
            title: "Operaciones fundamentales de una cola",
            content:
              "Las operaciones básicas de una cola son:\n\n1. **enqueue(elemento) / add(elemento):** Inserta un nuevo elemento al final de la cola. El elemento queda esperando su turno para ser procesado.\n\n2. **dequeue() / poll():** Elimina y retorna el elemento que se encuentra al frente de la cola. Este es el elemento que ha estado esperando más tiempo.\n\n3. **front() / peek():** Permite examinar el elemento al frente sin eliminarlo. Útil para inspeccionar qué elemento será procesado a continuación.\n\n4. **isEmpty():** Verifica si la cola no contiene elementos. Retorna verdadero cuando la cola está vacía.\n\n5. **isFull():** En implementaciones estáticas, verifica si la cola ha alcanzado su capacidad máxima.\n\nTodas estas operaciones fundamentales tienen complejidad O(1) en implementaciones eficientes.",
          },
          {
            title: "Implementación estática con arreglo",
            content:
              "La implementación de cola con arreglo requiere manejar dos índices (punteros) en lugar de uno: `primero` (front) y `ultimo` (rear). Esta diferencia fundamental con las pilas introduce complejidad adicional pero es necesaria para mantener el orden FIFO.\n\n**Gestión de índices:**\n\n- `primero` apunta al índice del elemento que será removido (el más antiguo)\n- `ultimo` apunta al índice donde se insertará el próximo elemento\n- Ambos se inicializan en 0 (o un valor que indique cola vacía)\n\n**Reto del desbordamiento circular:** Cuando `ultimo` alcanza el final del arreglo pero `primero` no está en el inicio, existe espacio disponible al inicio. Una solución es implementar una cola circular que reutiliza espacio. Sin embargo, para una implementación inicial, podemos simplemente detectar cuando la cola está llena.\n\n**Manejo de estado vacío:** Cuando `primero` y `ultimo` apuntan a la misma posición pero la cola está vacía, necesitamos una forma de distinguir esto del caso donde la cola tiene un solo elemento. Una estrategia común es inicializar ambos en valores que indiquen estado vacío (por ejemplo, ambos en 0 o -1) y verificar esta condición específica.",
          },
          {
            title: "Implementación con LinkedList de Java Collections",
            content:
              "Java proporciona la interfaz `Queue` implementada por `LinkedList`, ofreciendo una solución lista para usar que elimina muchas de las preocupaciones de implementación manual.\n\n**Ventajas de LinkedList como cola:**\n\n- **Sin límite de tamaño:** La lista crece dinámicamente según se necesite\n- **Sin riesgo de overflow:** No hay límite predefinido que pueda alcanzarse\n- **Implementación probada:** Utiliza código optimizado y probado extensivamente\n- **Interfaz estándar:** Sigue la interfaz `Queue` que es familiar y consistente\n\n**Métodos clave:**\n\n- `add()` / `offer()` - Insertar elementos (enqueue)\n- `poll()` - Remover y retornar el elemento del frente\n- `peek()` - Ver el elemento del frente sin removerlo\n- `remove()` - Similar a poll pero lanza excepción si está vacía\n\nEsta implementación es ideal cuando necesitamos una cola en producción sin preocuparnos por los detalles de implementación interna.",
          },
          {
            title: "ArrayDeque: la implementación optimizada",
            content:
              "`ArrayDeque` es la implementación de cola recomendada en Java cuando se requiere máximo rendimiento. Aunque su nombre sugiere que es un deque (doble cola), también implementa eficientemente la interfaz `Queue`.\n\n**Ventajas de ArrayDeque:**\n\n- **Alto rendimiento:** Más rápido que LinkedList debido a mejor localidad de memoria y acceso directo por índices\n- **Memoria eficiente:** Utiliza un arreglo redimensionable sin el overhead de nodos que tiene LinkedList\n- **Sin límite práctico:** Aunque técnicamente limitado por el tamaño máximo de arreglo en Java, en la práctica es suficiente para la mayoría de aplicaciones\n- **Sin overhead de sincronización:** A diferencia de algunas otras colecciones, no tiene sincronización innecesaria que reduzca rendimiento\n\n**Cuándo usar ArrayDeque:**\n\n- Cuando el rendimiento es crítico\n- Cuando necesitas una cola en aplicaciones de producción\n- Cuando no necesitas acceso bidireccional pero quieres la eficiencia de ArrayDeque\n\n**Métodos principales:** `offer()`, `poll()`, `peek()` - mismos que en LinkedList pero con mejor rendimiento.",
          },
          {
            title: "Comparación de implementaciones: criterios de selección",
            content:
              "La elección entre diferentes implementaciones de cola debe basarse en los requisitos específicos del problema:\n\n**Arreglo estático - Usar cuando:**\n\n- Necesitas entender los fundamentos internos\n- Conoces el tamaño máximo de antemano\n- Requieres control total sobre la gestión de memoria\n- Estás en un entorno con restricciones de memoria muy específicas\n\n**LinkedList - Usar cuando:**\n\n- Necesitas una solución rápida y confiable\n- El tamaño es variable e impredecible\n- Estás aprendiendo y quieres usar APIs estándar de Java\n- Necesitas una cola sin preocuparte por optimizaciones específicas\n\n**ArrayDeque - Usar cuando:**\n\n- El rendimiento es crítico\n- Estás desarrollando aplicaciones de producción\n- Necesitas la mejor combinación de velocidad y uso de memoria\n- Quieres seguir las mejores prácticas recomendadas por Oracle/Java\n\nComprender estas diferencias permite tomar decisiones informadas en lugar de elegir implementaciones arbitrariamente.",
          },
        ],
      },
      examples: [
        {
          title: "Implementación de Cola con arreglo estático",
          language: "java",
          code: `public class ColaEstatica {
    
    private int[] elementos;
    private int indicePrimero;
    private int indiceUltimo;
    private int capacidadMaxima;
    
    public ColaEstatica(int tamanio) {
        capacidadMaxima = tamanio;
        elementos = new int[capacidadMaxima + 1];
        indicePrimero = 0;
        indiceUltimo = 0;
    }
    
    public boolean estaVacia() {
        return indicePrimero == 0 && indiceUltimo == 0;
    }
    
    public boolean estaLlena() {
        return indiceUltimo == capacidadMaxima;
    }
    
    public void encolar(int valor) {
        if (estaLlena()) {
            System.out.println("Error: Cola llena - no se puede encolar");
            return;
        }
        
        if (estaVacia()) {
            indicePrimero = 1;
            indiceUltimo = 1;
            elementos[indiceUltimo] = valor;
        } else {
            indiceUltimo++;
            elementos[indiceUltimo] = valor;
        }
    }
    
    public int desencolar() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        
        int valor = elementos[indicePrimero];
        
        if (indicePrimero == indiceUltimo) {
            // Último elemento removido
            indicePrimero = 0;
            indiceUltimo = 0;
        } else {
            indicePrimero++;
        }
        
        return valor;
    }
    
    public int verFrente() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        return elementos[indicePrimero];
    }
}`,
        },
        {
          title: "Uso de LinkedList como cola",
          language: "java",
          code: `import java.util.LinkedList;
import java.util.Queue;

public class ColaLinkedList {
    
    public static void main(String[] args) {
        Queue<Integer> cola = new LinkedList<>();
        
        // Encolar elementos
        cola.add(15);
        cola.add(25);
        cola.add(35);
        
        // Ver el elemento del frente
        System.out.println("Frente de la cola: " + cola.peek()); // 15
        
        // Desencolar (atender)
        int atendido = cola.poll();
        System.out.println("Elemento atendido: " + atendido); // 15
        
        // Ver el nuevo frente
        System.out.println("Nuevo frente: " + cola.peek()); // 25
        
        // Verificar si está vacía
        System.out.println("¿Está vacía? " + cola.isEmpty()); // false
    }
}`,
        },
        {
          title: "Implementación con ArrayDeque (recomendado)",
          language: "java",
          code: `import java.util.ArrayDeque;
import java.util.Queue;

public class ColaArrayDeque {
    
    public static void main(String[] args) {
        Queue<Integer> cola = new ArrayDeque<>();
        
        // Ofrecer elementos (equivalente a encolar)
        cola.offer(5);
        cola.offer(15);
        cola.offer(25);
        
        // Ver el frente sin remover
        System.out.println("Frente: " + cola.peek()); // 5
        
        // Atender elemento
        int procesado = cola.poll();
        System.out.println("Procesado: " + procesado); // 5
        
        // Nuevo frente
        System.out.println("Nuevo frente: " + cola.peek()); // 15
        
        // Tamaño actual
        System.out.println("Tamaño: " + cola.size()); // 2
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Representación visual de una cola FIFO",
          description:
            "Diagrama que muestra cómo funcionan las operaciones de encolar y desencolar en una cola, ilustrando el flujo de elementos desde el final (donde se insertan) hacia el frente (donde se remueven).",
        },
        {
          title: "Gestión de índices en cola estática",
          description:
            "Visualización que explica cómo funcionan los punteros primero y último en una implementación de cola con arreglo, mostrando cómo estos índices se actualizan durante las operaciones.",
        },
      ],
      reflection:
        "Esta semana amplió significativamente mi perspectiva sobre estructuras de datos lineales. Mientras que las pilas (LIFO) y las colas (FIFO) comparten similitudes superficiales, descubrí que la diferencia en el orden de procesamiento tiene implicaciones profundas en su implementación y uso.\n\nInsights clave que desarrollé:\n\n- La necesidad de dos punteros (primero y último) en colas versus un solo índice (top) en pilas cambia completamente la lógica de implementación. Esto me ayudó a apreciar cómo pequeños cambios en los requisitos pueden transformar una solución.\n\n- Trabajar con las implementaciones estándar de Java (`Queue` con `LinkedList` y `ArrayDeque`) me mostró cómo los diseñadores de APIs abstraen complejidad, permitiendo uso sencillo mientras mantienen eficiencia interna.\n\n- La implementación manual me dio control total y comprensión profunda, mientras que usar las colecciones estándar me enseñó a evaluar qué herramientas usar en producción.\n\n- Entender por qué `ArrayDeque` es la opción recomendada para colas en Java me introdujo a considerar factores como localidad de memoria, overhead de estructura de datos, y optimizaciones a nivel de sistema.\n\nAhora puedo elegir la estructura de datos apropiada según las características del problema, no simplemente implementar la primera que conozco. Esta habilidad de decisión informada me prepara mejor para temas más avanzados como listas enlazadas personalizadas, árboles, y estructuras de datos jerárquicas donde la elección de estructura base impacta directamente la eficiencia del algoritmo.",
    },
  },
  "6": {
    id: "6",
    title: "SEMANA 6 - Colas y Listas Enlazadas",
    content: {
      summary:
        "Esta semana exploré la interconexión entre dos estructuras de datos fundamentales: las colas (que estudiamos en semanas anteriores) y las listas enlazadas, una estructura dinámica que elimina las limitaciones de tamaño inherentes a los arreglos estáticos.\n\nEl objetivo central fue comprender cómo las listas enlazadas proporcionan una base sólida para implementar estructuras como colas y pilas de manera completamente dinámica, sin las restricciones de capacidad fija que caracterizan a las implementaciones basadas en arreglos.\n\nDurante esta semana adquirí conocimientos fundamentales sobre:\n\n- La naturaleza y funcionamiento de los nodos como unidades básicas de construcción\n- El concepto de punteros y referencias para enlazar nodos entre sí\n- La gestión de memoria dinámica y su diferencia con asignación estática\n- Operaciones esenciales: inserción, eliminación, recorrido y búsqueda en estructuras enlazadas\n- La implementación de colas utilizando listas enlazadas como alternativa eficiente a arreglos\n\nEsta comprensión estableció las bases conceptuales necesarias para abordar semanas posteriores donde estudiaremos listas simples, circulares y doblemente enlazadas con mayor profundidad.",
      development: {
        sections: [
          {
            title: "Introducción a las listas enlazadas",
            content:
              "Una lista enlazada es una estructura de datos dinámica constituida por una secuencia de nodos conectados mediante referencias (punteros). A diferencia de los arreglos que almacenan elementos en posiciones de memoria contigua, los nodos de una lista enlazada pueden ubicarse en cualquier parte de la memoria y mantenerse conectados mediante enlaces.\n\n**Componentes fundamentales:**\n\nCada nodo en una lista enlazada contiene dos componentes esenciales:\n\n1. **Dato:** La información que el nodo almacena (puede ser de cualquier tipo: primitivo, objeto, etc.)\n2. **Enlace (puntero):** Una referencia al siguiente nodo en la secuencia, o `null` si es el último nodo\n\n**Características distintivas:**\n\n- **Tamaño dinámico:** La lista puede crecer o reducirse según se necesite, sin necesidad de preasignar espacio\n- **Memoria no contigua:** Los nodos no requieren estar ubicados consecutivamente en memoria\n- **Eficiencia en modificaciones:** Las inserciones y eliminaciones pueden realizarse en tiempo O(1) si se conoce la posición\n- **Flexibilidad estructural:** Ideal para estructuras cuyo tamaño varía frecuentemente o es impredecible\n\nEsta estructura es la base sobre la cual se construyen implementaciones dinámicas de pilas, colas y estructuras más complejas.",
          },
          {
            title: "El concepto de nodo: unidad fundamental",
            content:
              "El nodo es la unidad básica de construcción en estructuras enlazadas. Representa un contenedor que encapsula información y mantiene una conexión con otros nodos, permitiendo crear estructuras lineales o no lineales.\n\n**Estructura de un nodo:**\n\nUn nodo típico contiene un campo de datos y uno o más campos de referencia. En su forma más simple (lista enlazada simple), un nodo tiene:\n\n- Un campo `dato` que almacena el valor del elemento\n- Un campo `siguiente` que apunta al siguiente nodo en la secuencia, o `null` si es el último\n\n**Inicialización de nodos:**\n\nAl crear un nuevo nodo, se asigna memoria dinámicamente para almacenar sus campos. El puntero `siguiente` se inicializa en `null`, indicando que el nodo aún no está conectado a ningún otro. Una vez insertado en la lista, este puntero se actualiza para apuntar al siguiente nodo correspondiente.\n\n**Importancia en estructuras compuestas:**\n\nLos nodos son fundamentales no solo para listas enlazadas, sino también para implementar colas dinámicas, pilas dinámicas, árboles, grafos y otras estructuras de datos avanzadas. Dominar el concepto de nodo es esencial para comprender cómo funcionan internamente estas estructuras.",
          },
          {
            title: "Implementación de lista enlazada simple",
            content:
              "Una lista enlazada simple mantiene una referencia al primer nodo (comúnmente llamado `head` o `cabeza`), a partir del cual se puede acceder a todos los demás nodos siguiendo los enlaces sucesivos.\n\n**Operaciones fundamentales:**\n\n1. **Inserción al inicio:** Se crea un nuevo nodo cuyo campo `siguiente` apunta al nodo actual `head`, luego se actualiza `head` para que apunte al nuevo nodo. Esta operación es O(1).\n\n2. **Inserción al final:** Se recorre la lista hasta encontrar el último nodo (aquel cuyo `siguiente` es `null`), luego se actualiza su campo `siguiente` para que apunte al nuevo nodo. Esta operación es O(n) porque requiere recorrer toda la lista.\n\n3. **Eliminación de un elemento:** Se busca el nodo a eliminar. Si es el primer nodo, se actualiza `head`. Si está en medio o al final, se actualiza el campo `siguiente` del nodo anterior para que salte el nodo a eliminar. Esta operación es O(n) en el peor caso.\n\n4. **Recorrido:** Se inicia desde `head` y se siguen los punteros `siguiente` hasta encontrar `null`, procesando cada nodo en el camino.\n\n5. **Búsqueda:** Similar al recorrido, pero deteniéndose cuando se encuentra el elemento buscado o al llegar al final de la lista.",
          },
          {
            title: "Relación entre listas enlazadas y colas",
            content:
              "Las listas enlazadas proporcionan una implementación natural y eficiente para colas dinámicas. Mientras que las colas basadas en arreglos tienen limitaciones de capacidad, las colas implementadas con listas enlazadas pueden crecer indefinidamente (hasta agotar la memoria disponible).\n\n**Requisitos de una cola:**\n\nUna cola necesita dos operaciones principales:\n\n- **Inserción por el final (rear):** Agregar elementos al final de la cola\n- **Eliminación por el frente (front):** Remover elementos desde el inicio de la cola\n\n**Implementación eficiente con lista enlazada:**\n\nPara lograr eficiencia O(1) en ambas operaciones, una cola dinámica mantiene dos referencias:\n\n- `primero`: Apunta al primer nodo (frente de la cola)\n- `ultimo`: Apunta al último nodo (final de la cola)\n\nCon estas dos referencias, podemos insertar al final en O(1) actualizando `ultimo.siguiente`, y eliminar del frente en O(1) actualizando `primero`. Esta eficiencia contrasta con implementaciones basadas en arreglos donde se requiere gestión más compleja de índices o reacomodación de elementos.",
          },
          {
            title: "Ventajas de las estructuras basadas en listas enlazadas",
            content:
              "Implementar estructuras de datos como colas y pilas utilizando listas enlazadas ofrece múltiples ventajas sobre implementaciones estáticas basadas en arreglos:\n\n**Tamaño dinámico:** No existe un límite predefinido de capacidad. La estructura crece según se necesite y solo está limitada por la memoria disponible del sistema.\n\n**Eficiencia en operaciones:** Las operaciones de inserción y eliminación en los extremos pueden realizarse en tiempo constante O(1) sin necesidad de desplazar elementos, a diferencia de los arreglos donde insertar al inicio requiere desplazar todos los elementos restantes.\n\n**Sin desperdicio de memoria:** A diferencia de los arreglos estáticos que reservan espacio incluso si no se utiliza completamente, las listas enlazadas solo consumen memoria para los elementos realmente almacenados.\n\n**Flexibilidad estructural:** Las listas enlazadas pueden adaptarse fácilmente para implementar variantes como listas circulares o doblemente enlazadas, extendiendo su funcionalidad según necesidades específicas.\n\n**Eliminación de problemas de overflow:** El riesgo de desbordamiento por capacidad fija se elimina completamente, haciendo estas estructuras ideales para aplicaciones donde el tamaño de datos es impredecible o variable.",
          },
        ],
      },
      examples: [
        {
          title: "Clase Nodo para lista enlazada",
          language: "java",
          code: `class Nodo {
    int valor;
    Nodo siguiente;
    
    public Nodo(int valor) {
        this.valor = valor;
        this.siguiente = null;  // Inicialmente sin enlace
    }
}`,
        },
        {
          title: "Lista enlazada simple con operaciones básicas",
          language: "java",
          code: `public class ListaEnlazada {
    
    private Nodo cabeza;
    
    public ListaEnlazada() {
        cabeza = null;
    }
    
    // Insertar al principio
    public void agregarInicio(int valor) {
        Nodo nuevo = new Nodo(valor);
        nuevo.siguiente = cabeza;
        cabeza = nuevo;
    }
    
    // Insertar al final
    public void agregarFinal(int valor) {
        Nodo nuevo = new Nodo(valor);
        
        if (cabeza == null) {
            cabeza = nuevo;
            return;
        }
        
        Nodo actual = cabeza;
        while (actual.siguiente != null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevo;
    }
    
    // Eliminar por valor
    public void remover(int valor) {
        if (cabeza == null) return;
        
        if (cabeza.valor == valor) {
            cabeza = cabeza.siguiente;
            return;
        }
        
        Nodo actual = cabeza;
        while (actual.siguiente != null && actual.siguiente.valor != valor) {
            actual = actual.siguiente;
        }
        
        if (actual.siguiente != null) {
            actual.siguiente = actual.siguiente.siguiente;
        }
    }
    
    // Mostrar todos los elementos
    public void mostrar() {
        Nodo actual = cabeza;
        while (actual != null) {
            System.out.print(actual.valor + " → ");
            actual = actual.siguiente;
        }
        System.out.println("null");
    }
}`,
        },
        {
          title: "Cola implementada con lista enlazada",
          language: "java",
          code: `public class ColaDinamica {
    
    private Nodo primero;
    private Nodo ultimo;
    
    public ColaDinamica() {
        primero = null;
        ultimo = null;
    }
    
    public boolean estaVacia() {
        return primero == null;
    }
    
    // Encolar: agregar al final
    public void encolar(int valor) {
        Nodo nuevo = new Nodo(valor);
        
        if (estaVacia()) {
            primero = ultimo = nuevo;
        } else {
            ultimo.siguiente = nuevo;
            ultimo = nuevo;
        }
    }
    
    // Desencolar: remover del frente
    public int desencolar() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        
        int valor = primero.valor;
        primero = primero.siguiente;
        
        // Si la cola queda vacía, actualizar ultimo
        if (primero == null) {
            ultimo = null;
        }
        
        return valor;
    }
    
    // Ver el elemento del frente sin removerlo
    public int verFrente() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        return primero.valor;
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Representación visual de lista enlazada simple",
          description:
            "Diagrama que muestra la estructura de una lista enlazada, incluyendo cómo los nodos están conectados mediante punteros y cómo el campo siguiente de cada nodo apunta al siguiente nodo o a null.",
        },
      ],
      reflection:
        "Esta semana fue fundamental para comprender cómo las estructuras de datos se construyen a partir de componentes simples pero poderosos. Los nodos y punteros, aunque conceptualmente sencillos, proporcionan la base para crear estructuras dinámicas sofisticadas que trascienden las limitaciones de los arreglos estáticos.\n\nLecciones clave que internalicé:\n\n- Una lista enlazada no es simplemente una alternativa a un arreglo; es una herramienta fundamental para implementar estructuras dinámicas como colas y pilas sin restricciones de tamaño.\n\n- La memoria dinámica abre posibilidades que los arreglos estáticos no pueden ofrecer. La capacidad de crear estructuras que crecen y se reducen según necesidad es poderosa y esencial en programación moderna.\n\n- El uso de punteros transforma completamente la lógica algorítmica. Operaciones que en arreglos requieren desplazamiento de elementos se convierten en simples actualizaciones de referencias.\n\n- Comprender nodos y punteros no es solo importante para listas enlazadas; es esencial para estructuras más avanzadas como árboles, grafos, y tablas hash que estudiaremos posteriormente.\n\n- La implementación de colas con listas enlazadas demostró cómo una comprensión profunda de estructuras fundamentales permite construir soluciones elegantes y eficientes.\n\nEsta semana elevó mi entendimiento sobre gestión de memoria y el comportamiento real de las estructuras de datos en ejecución. La conexión entre teoría y práctica se volvió más tangible, preparándome para abordar estructuras más complejas con confianza.",
    },
  },
  "7": {
    id: "7",
    title: "SEMANA 7 - Lista Simple",
    content: {
      summary:
        "Esta semana me sumergí profundamente en el estudio de la Lista Simple, la forma más fundamental y versátil de estructura enlazada. Aunque representa la variante más básica de lista enlazada, su flexibilidad y potencia la convierten en una herramienta esencial para el desarrollo de algoritmos y estructuras de datos más complejas.\n\nDurante esta semana exploré en detalle:\n\n- Los principios fundamentales de construcción y representación de listas simples\n- Técnicas de inserción y eliminación de nodos en diferentes posiciones (inicio, final, posición específica)\n- Estrategias de recorrido, búsqueda y manipulación de nodos utilizando punteros\n- Gestión correcta de memoria dinámica y prevención de fugas de memoria\n- Criterios para elegir entre listas simples, pilas y colas según el problema a resolver\n\nLa lista simple sirve como base conceptual para comprender variantes más sofisticadas como listas circulares, listas doblemente enlazadas, y estructuras jerárquicas como árboles y grafos.",
      development: {
        sections: [
          {
            title: "Fundamentos de la lista simple",
            content:
              "Una lista simple (también conocida como lista enlazada simple) es una colección secuencial de nodos donde cada nodo contiene un dato y una referencia al siguiente nodo en la secuencia. El último nodo de la lista apunta a `null`, marcando el final de la estructura.\n\n**Características distintivas:**\n\n- **Crecimiento dinámico:** La lista puede expandirse o contraerse sin necesidad de reasignar memoria o desplazar elementos\n- **Memoria no contigua:** Los nodos no requieren ubicarse en posiciones consecutivas de memoria, a diferencia de los arreglos\n- **Eficiencia en inserciones/eliminaciones:** Las operaciones en el inicio son O(1), aunque insertar o eliminar en posiciones arbitrarias requiere recorrer hasta la posición deseada\n- **Versatilidad estructural:** Puede adaptarse para implementar pilas, colas y otras estructuras según necesidad\n- **Base para estructuras avanzadas:** Sirve como fundamento conceptual para listas dobles, circulares, árboles y grafos\n\nLa lista simple representa el equilibrio perfecto entre simplicidad conceptual y poder expresivo, haciéndola ideal tanto para aprendizaje como para aplicaciones prácticas.",
          },
          {
            title: "Arquitectura del nodo en listas simples",
            content:
              "El nodo es el componente arquitectónico fundamental de cualquier lista enlazada. En una lista simple, cada nodo mantiene exactamente dos campos:\n\n1. **Campo de datos:** Almacena el valor del elemento. Este campo puede contener cualquier tipo de dato: primitivos (int, char, double), objetos, o incluso referencias a otras estructuras complejas.\n\n2. **Campo de enlace:** Una referencia (puntero) al siguiente nodo en la secuencia. Si el nodo es el último de la lista, este campo contiene `null`, señalando que no hay más nodos.\n\n**Inicialización y gestión:**\n\nAl crear un nuevo nodo, se asigna memoria dinámicamente y se inicializa el campo de enlace en `null`. Una vez que el nodo se inserta en la lista, su campo de enlace se actualiza para apuntar al nodo siguiente apropiado. Esta gestión de enlaces es lo que mantiene la estructura de la lista coherente.\n\n**Independencia de ubicación:**\n\nA diferencia de los arreglos donde la posición de un elemento determina su ubicación en memoria, en listas enlazadas la posición lógica de un nodo (su orden en la secuencia) está determinada únicamente por las referencias entre nodos, no por su ubicación física en memoria.",
          },
          {
            title: "Operaciones esenciales en listas simples",
            content:
              "Una implementación completa de lista simple debe proporcionar operaciones para manipular sus elementos:\n\n**Inserción al inicio:** Crea un nuevo nodo y lo coloca como primer elemento de la lista. Se actualiza el puntero `head` para apuntar al nuevo nodo, y el campo `siguiente` del nuevo nodo apunta al nodo que anteriormente era el primero. Complejidad: O(1).\n\n**Inserción al final:** Requiere recorrer toda la lista hasta encontrar el último nodo (aquel cuyo `siguiente` es `null`), luego actualizar su campo `siguiente` para que apunte al nuevo nodo. Complejidad: O(n).\n\n**Inserción en posición específica:** Involucra recorrer hasta la posición anterior a la deseada, luego actualizar enlaces para insertar el nuevo nodo entre dos nodos existentes. Complejidad: O(n) en el peor caso.\n\n**Eliminación por valor:** Busca el nodo que contiene el valor objetivo. Si es el primer nodo, actualiza `head`. Si está en medio o final, actualiza el campo `siguiente` del nodo anterior para omitir el nodo a eliminar. Complejidad: O(n).\n\n**Búsqueda:** Recorre la lista desde `head` hasta encontrar el elemento deseado o llegar al final. Complejidad: O(n) en el peor caso.\n\n**Recorrido:** Visita cada nodo de la lista procesando su dato. Esencial para operaciones que requieren examinar todos los elementos. Complejidad: O(n).",
          },
          {
            title: "Análisis de complejidad de operaciones",
            content:
              "Entender la complejidad de las operaciones en listas simples es crucial para decidir cuándo utilizarlas:\n\n**Operaciones O(1) - Tiempo constante:**\n\n- Inserción al inicio: Solo requiere actualizar el puntero `head`\n- Eliminación del primer elemento: Similarmente, solo actualiza `head`\n- Verificar si está vacía: Comparación simple del puntero `head` con `null`\n\n**Operaciones O(n) - Tiempo lineal:**\n\n- Inserción al final: Requiere recorrer toda la lista para encontrar el último nodo\n- Inserción en posición: Debe recorrer hasta la posición deseada\n- Eliminación por valor: En el peor caso, debe recorrer hasta encontrar o verificar todo\n- Búsqueda: Debe examinar nodos hasta encontrar el elemento o llegar al final\n- Recorrido completo: Necesita visitar todos los nodos\n\n**Consideraciones de memoria:**\n\n- Espacio: O(n) donde n es el número de elementos, ya que cada nodo requiere espacio para dato y puntero\n- No hay desperdicio de memoria como en arreglos estáticos con capacidad no utilizada\n\nEsta diferencia en complejidad entre operaciones del inicio (O(1)) y del final (O(n)) es importante considerar al elegir una estructura de datos para un problema específico.",
          },
          {
            title: "Casos de uso y aplicaciones prácticas",
            content:
              "Las listas simples encuentran aplicación en múltiples contextos de desarrollo de software:\n\n**Colas y pilas dinámicas:** Las listas enlazadas son la base para implementar colas y pilas que no tienen límite de tamaño, a diferencia de sus contrapartes estáticas basadas en arreglos.\n\n**Gestión de historial:** Sistemas que necesitan mantener un registro de acciones o estados (como navegadores web o editores de texto) pueden usar listas para gestionar el historial de manera eficiente.\n\n**Navegación de menús:** Estructuras jerárquicas de menús en aplicaciones pueden implementarse usando listas enlazadas para representar opciones y sub-opciones.\n\n**Implementación de tablas hash:** Cuando se utilizan listas de colisión en tablas hash para manejar elementos que tienen el mismo valor hash, las listas enlazadas proporcionan la estructura de datos subyacente.\n\n**Motores de videojuegos:** Sistemas de gestión de entidades en videojuegos frecuentemente usan listas enlazadas para mantener colecciones dinámicas de objetos que se agregan y eliminan frecuentemente durante la ejecución del juego.\n\n**Polinomios y representación de expresiones:** Las listas pueden usarse para representar polinomios o expresiones matemáticas donde cada término es un nodo, facilitando operaciones como suma o multiplicación de polinomios.\n\nCada aplicación aprovecha la flexibilidad y el crecimiento dinámico que las listas simples proporcionan sobre estructuras estáticas.",
          },
        ],
      },
      examples: [
        {
          title: "Clase Nodo para lista simple",
          language: "java",
          code: `class Nodo {
    int dato;
    Nodo siguiente;
    
    public Nodo(int dato) {
        this.dato = dato;
        this.siguiente = null;
    }
}`,
        },
        {
          title: "Implementación completa de lista simple",
          language: "java",
          code: `public class ListaSimpleCompleta {
    
    private Nodo cabeza;
    
    public ListaSimpleCompleta() {
        cabeza = null;
    }
    
    // Insertar al inicio - O(1)
    public void insertarInicio(int valor) {
        Nodo nuevo = new Nodo(valor);
        nuevo.siguiente = cabeza;
        cabeza = nuevo;
    }
    
    // Insertar al final - O(n)
    public void insertarFinal(int valor) {
        Nodo nuevo = new Nodo(valor);
        
        if (cabeza == null) {
            cabeza = nuevo;
            return;
        }
        
        Nodo actual = cabeza;
        while (actual.siguiente != null) {
            actual = actual.siguiente;
        }
        actual.siguiente = nuevo;
    }
    
    // Insertar en posición específica - O(n)
    public void insertarPosicion(int valor, int posicion) {
        if (posicion == 0) {
            insertarInicio(valor);
            return;
        }
        
        Nodo nuevo = new Nodo(valor);
        Nodo actual = cabeza;
        
        // Avanzar hasta la posición anterior
        for (int i = 0; i < posicion - 1 && actual != null; i++) {
            actual = actual.siguiente;
        }
        
        if (actual == null) {
            System.out.println("Posición fuera de rango");
            return;
        }
        
        nuevo.siguiente = actual.siguiente;
        actual.siguiente = nuevo;
    }
    
    // Eliminar por valor - O(n)
    public void eliminar(int valor) {
        if (cabeza == null) return;
        
        if (cabeza.dato == valor) {
            cabeza = cabeza.siguiente;
            return;
        }
        
        Nodo actual = cabeza;
        while (actual.siguiente != null && actual.siguiente.dato != valor) {
            actual = actual.siguiente;
        }
        
        if (actual.siguiente != null) {
            actual.siguiente = actual.siguiente.siguiente;
        }
    }
    
    // Buscar elemento - O(n)
    public boolean buscar(int valor) {
        Nodo actual = cabeza;
        while (actual != null) {
            if (actual.dato == valor) {
                return true;
            }
            actual = actual.siguiente;
        }
        return false;
    }
    
    // Mostrar todos los elementos
    public void mostrar() {
        Nodo actual = cabeza;
        while (actual != null) {
            System.out.print(actual.dato + " → ");
            actual = actual.siguiente;
        }
        System.out.println("null");
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Proceso de inserción al inicio en lista simple",
          description:
            "Diagrama que ilustra paso a paso cómo se inserta un nuevo nodo al inicio de una lista simple, mostrando cómo se actualizan los punteros head y siguiente del nuevo nodo.",
        },
      ],
      reflection:
        "El estudio profundo de listas simples transformó mi comprensión de cómo se construyen estructuras de datos dinámicas. Lo que inicialmente parecía un concepto abstracto se convirtió en una herramienta práctica y poderosa con aplicaciones concretas.\n\nAspectos fundamentales que desarrollé:\n\n- Las listas manejan memoria de manera completamente diferente a los arreglos. Mientras los arreglos requieren memoria contigua y tamaño fijo, las listas aprovechan memoria dinámica distribuida conectada mediante punteros.\n\n- El uso de punteros transforma la lógica de programación. Operaciones que en arreglos implican desplazamiento masivo de elementos se convierten en simples actualizaciones de referencias en listas.\n\n- Las operaciones requieren pensar en términos de secuencias, enlaces y reestructuración. Insertar o eliminar nodos no es solo cambiar valores, sino reorganizar las conexiones entre nodos manteniendo la integridad de la estructura.\n\n- La lista simple establece las bases conceptuales necesarias para estructuras más avanzadas. Comprender cómo funcionan los enlaces unidireccionales prepara el terreno para entender listas dobles (bidireccionales), circulares, árboles y grafos.\n\n- Una estructura de datos no es solo código; es diseño, lógica y comprensión profunda de cómo se comporta la memoria. La lista simple me enseñó que crear estructuras eficientes requiere entender tanto la teoría como la práctica de gestión de memoria.\n\nEsta semana sentó las bases para abordar estructuras más complejas, dándome la confianza y fundamentos necesarios para explorar variantes avanzadas de listas enlazadas.",
    },
  },
  "8": {
    id: "8",
    title: "SEMANA 8 - Listas Simples, Listas Enlazadas y Aplicabilidad de Colas",
    content: {
      summary:
        "Esta semana consolidé y amplié el conocimiento adquirido sobre listas simples y estructuras enlazadas, enfocándome especialmente en su aplicación práctica para implementar colas dinámicas y su relevancia en escenarios del mundo real.\n\nEl objetivo principal fue trascender la teoría para comprender no solo cómo funcionan estas estructuras, sino cuándo y por qué utilizarlas. Exploré casos de uso reales en sistemas de software, sistemas operativos, redes de computadoras y gestión de memoria.\n\nDurante esta semana profundicé en:\n\n- La consolidación de conceptos sobre listas simples y estructuras lineales dinámicas\n- La aplicación de listas enlazadas para construir estructuras más complejas y especializadas\n- Análisis comparativo de cuándo las colas dinámicas (basadas en listas) superan a las colas estáticas (basadas en arreglos)\n- Evaluación de eficiencia y consideraciones de rendimiento entre estructuras dinámicas y estáticas\n- Exploración de aplicaciones prácticas en sistemas operativos, redes, bases de datos, desarrollo backend y videojuegos\n\nEsta semana conectó los conceptos teóricos aprendidos en semanas anteriores con aplicaciones reales, demostrando por qué estas estructuras son fundamentales en el desarrollo de software moderno.",
      development: {
        sections: [
          {
            title: "Consolidación: fundamentos de listas enlazadas simples",
            content:
              "Una lista enlazada simple se compone de nodos conectados unidireccionalmente mediante punteros. Cada nodo mantiene un dato y una referencia al siguiente nodo, creando una secuencia lineal donde la posición lógica está determinada por las conexiones entre nodos, no por ubicación física en memoria.\n\n**Características que definen su utilidad:**\n\n- **Crecimiento dinámico sin límites:** A diferencia de arreglos estáticos, no existe un límite predefinido de capacidad. La lista crece según necesidad, limitada solo por memoria disponible.\n- **Memoria no contigua:** Los nodos pueden ubicarse en cualquier parte de la memoria, eliminando la necesidad de bloques de memoria consecutiva que requieren los arreglos.\n- **Sin riesgo de overflow relacionado con capacidad:** Mientras haya memoria disponible, se pueden agregar más elementos sin preocuparse por límites de tamaño fijo.\n- **Eficiencia en operaciones de extremos:** Insertar o eliminar en el inicio es O(1), mientras que operaciones en el final requieren recorrer la lista.\n\nEstas propiedades hacen que las listas enlazadas sean ideales para estructuras cuyo tamaño varía frecuentemente o es impredecible, donde la flexibilidad supera la necesidad de acceso aleatorio rápido.",
          },
          {
            title: "Colas dinámicas: implementación superior con listas enlazadas",
            content:
              "Una cola implementada con lista enlazada supera significativamente a su contraparte basada en arreglo en términos de flexibilidad y adaptabilidad. Esta implementación utiliza dos referencias: `primero` (apuntando al frente) y `ultimo` (apuntando al final), permitiendo operaciones eficientes en ambos extremos.\n\n**Ventajas sobre colas estáticas:**\n\n- **Capacidad ilimitada:** No existe riesgo de saturación por límite de tamaño. La cola puede crecer hasta agotar memoria disponible.\n- **Operaciones O(1) garantizadas:** Tanto la inserción al final como la eliminación del frente son constantes, sin necesidad de desplazar elementos o gestionar índices circulares complejos.\n- **Sin desplazamientos de memoria:** A diferencia de colas con arreglo donde eliminar del frente potencialmente requiere desplazar elementos, las colas dinámicas simplemente actualizan punteros.\n- **Ideal para aplicaciones reales:** Perfectas para simulaciones de eventos, gestión de flujos de trabajo, procesamiento de tareas concurrentes, y sistemas operativos donde el número de procesos o tareas es impredecible.\n\n**Contraste con colas estáticas:**\n\nLas colas basadas en arreglos tienen limitaciones significativas: requieren tamaño fijo conocido de antemano, pueden generar problemas cuando se alcanza la capacidad máxima, y pueden necesitar gestión compleja de desplazamientos o implementación de colas circulares para eficiencia.",
          },
          {
            title: "Implementación práctica de cola con lista enlazada",
            content:
              "La implementación de una cola dinámica aprovecha las propiedades de las listas enlazadas para crear una estructura eficiente y flexible. La clave está en mantener referencias tanto al primer como al último nodo, permitiendo inserción rápida al final y eliminación rápida del inicio.\n\n**Estrategia de implementación:**\n\n1. **Estado inicial:** Tanto `primero` como `ultimo` se inicializan en `null`, indicando cola vacía.\n\n2. **Primera inserción:** Cuando se agrega el primer elemento, ambos punteros apuntan al nuevo nodo, estableciendo que un solo elemento es tanto el primero como el último.\n\n3. **Inserción subsecuente:** Se crea un nuevo nodo, se actualiza `ultimo.siguiente` para apuntarlo, luego se actualiza `ultimo` al nuevo nodo. Esto mantiene la referencia al final sin recorrer la lista.\n\n4. **Eliminación:** Se obtiene el valor de `primero`, luego se actualiza `primero` a `primero.siguiente`. Si después de esto `primero` es `null`, también se actualiza `ultimo` a `null` porque la cola quedó vacía.\n\nEsta estrategia garantiza que todas las operaciones fundamentales (enqueue, dequeue, peek) sean O(1), proporcionando eficiencia óptima.",
          },
          {
            title: "Aplicaciones reales de colas en sistemas computacionales",
            content:
              "Las colas, especialmente las dinámicas basadas en listas enlazadas, son omnipresentes en sistemas computacionales modernos:\n\n**Sistemas Operativos:**\n\n- **Colas de procesos:** El planificador de procesos utiliza colas para gestionar procesos listos para ejecución, aplicando algoritmos como Round Robin donde los procesos se ejecutan en turnos.\n\n- **Gestión de E/S:** Las operaciones de entrada/salida se encolan para ser procesadas en orden FIFO, permitiendo que múltiples procesos soliciten acceso a dispositivos sin conflictos.\n\n- **Planificadores de CPU:** Sistemas de múltiples niveles de colas organizan procesos según prioridad, utilizando colas para gestionar la asignación de tiempo de CPU.\n\n**Redes de Computadoras:**\n\n- **Buffers de routers:** Los routers mantienen colas de paquetes de red esperando ser transmitidos, gestionando flujos de tráfico cuando hay congestión.\n\n- **Control de flujo:** Sistemas de tráfico shaping utilizan colas para regular la velocidad de transmisión de datos, evitando saturación de enlaces de red.\n\n**Bases de Datos:**\n\n- **Transacciones diferidas:** Sistemas de bases de datos encolan transacciones para procesamiento asíncrono, mejorando rendimiento.\n\n- **Logs de escritura:** Las operaciones de escritura se pueden encolar para optimizar acceso a disco.\n\n**Desarrollo Backend:**\n\n- **Message queues:** Sistemas como RabbitMQ y Apache Kafka utilizan colas para comunicación asíncrona entre servicios distribuidos.\n\n- **Manejo de solicitudes:** Servidores web encolan solicitudes HTTP cuando la capacidad de procesamiento está saturada.\n\n**Videojuegos:**\n\n- **Cola de eventos:** Los eventos del juego se procesan en orden mediante colas, asegurando procesamiento cronológico correcto.\n\n- **Actualización de entidades:** Sistemas de actualización de objetos del juego pueden usar colas para gestionar qué entidades se procesan en cada frame.\n\nCada aplicación aprovecha la propiedad FIFO de las colas para garantizar procesamiento ordenado y justo de elementos.",
          },
          {
            title: "Análisis comparativo: lista simple vs cola dinámica",
            content:
              "Aunque las colas dinámicas se implementan utilizando listas enlazadas, representan una especialización con comportamiento específico:\n\n**Lista Simple - Estructura General:**\n\n- **Inserción:** Puede ocurrir en inicio, final o posición específica según el método utilizado\n- **Eliminación:** Flexible, puede eliminar desde cualquier posición o por valor\n- **Modelo:** General y versátil, adecuada para múltiples casos de uso\n- **Complejidad:** Varía según la operación: O(1) para inicio, O(n) para final o posición específica\n- **Uso típico:** Navegación, estructuras generales, almacenamiento flexible\n\n**Cola Dinámica - Estructura Especializada:**\n\n- **Inserción:** Siempre al final (rear), manteniendo orden de llegada\n- **Eliminación:** Siempre al inicio (front), respetando FIFO\n- **Modelo:** Especializado para procesamiento secuencial ordenado\n- **Complejidad:** Consistente O(1) para todas las operaciones principales\n- **Uso típico:** Turnos, procesos, flujos de trabajo, simulaciones\n\n**Relación entre ambas:**\n\nUna cola dinámica es esencialmente una lista simple con restricciones en cómo se accede y modifica. Restringe las operaciones para mantener el comportamiento FIFO, ganando eficiencia y simplicidad a cambio de flexibilidad. Entender esta relación ayuda a ver cómo estructuras generales se pueden especializar para casos de uso específicos.",
          },
          {
            title: "Criterios de selección: cuándo usar cada estructura",
            content:
              "La elección entre diferentes estructuras de datos debe basarse en los requisitos específicos del problema:\n\n**Usar Cola cuando:**\n\n- Necesitas procesamiento en orden de llegada (FIFO)\n- El problema involucra turnos, procesos o flujos secuenciales\n- Requieres garantía de orden cronológico\n- Ejemplos: sistemas de turnos, colas de impresión, procesamiento de solicitudes, simulaciones de eventos\n\n**Usar Lista Simple cuando:**\n\n- Necesitas inserción/eliminación en múltiples posiciones\n- El orden de procesamiento no es crítico\n- Requieres navegación bidireccional o aleatoria\n- Ejemplos: historial de navegación, gestión de menús, representación de secuencias generales\n\n**Usar Pila cuando:**\n\n- Necesitas procesamiento en orden inverso (LIFO)\n- El último elemento agregado debe procesarse primero\n- Ejemplos: deshacer/rehacer, evaluación de expresiones, call stack\n\n**Consideraciones adicionales:**\n\n- **Tamaño conocido vs variable:** Si el tamaño es fijo y conocido, arreglos pueden ser más eficientes. Si es variable, listas enlazadas ofrecen flexibilidad.\n\n- **Frecuencia de operaciones:** Si necesitas acceso frecuente a posiciones aleatorias, arreglos son mejores. Si las operaciones son principalmente en extremos, listas enlazadas pueden ser suficientes.\n\n- **Requisitos de memoria:** Arreglos usan memoria contigua pero pueden desperdiciar espacio. Listas usan solo lo necesario pero tienen overhead de punteros.\n\nComprender estos criterios permite tomar decisiones informadas que optimizan tanto rendimiento como mantenibilidad del código.",
          },
        ],
      },
      examples: [
        {
          title: "Cola dinámica completa con lista enlazada",
          language: "java",
          code: `public class ColaListaEnlazada {
    
    private Nodo primero;
    private Nodo ultimo;
    
    public ColaListaEnlazada() {
        primero = null;
        ultimo = null;
    }
    
    public boolean estaVacia() {
        return primero == null;
    }
    
    // Encolar: siempre al final
    public void encolar(int valor) {
        Nodo nuevo = new Nodo(valor);
        
        if (estaVacia()) {
            primero = ultimo = nuevo;
        } else {
            ultimo.siguiente = nuevo;
            ultimo = nuevo;
        }
    }
    
    // Desencolar: siempre del frente
    public int desencolar() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        
        int valor = primero.valor;
        primero = primero.siguiente;
        
        // Si quedó vacía, actualizar ultimo también
        if (primero == null) {
            ultimo = null;
        }
        
        return valor;
    }
    
    // Ver frente sin remover
    public int verFrente() {
        if (estaVacia()) {
            System.out.println("Error: Cola vacía");
            return -1;
        }
        return primero.valor;
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Comparación visual de estructura de lista simple y cola",
          description:
            "Diagrama que muestra las diferencias estructurales entre una lista simple general y una cola especializada, ilustrando cómo las restricciones de acceso definen el comportamiento de cada estructura.",
        },
        {
          title: "Flujo de operaciones en cola dinámica",
          description:
            "Visualización que representa cómo funcionan las operaciones encolar y desencolar en una cola implementada con lista enlazada, mostrando cómo se actualizan los punteros primero y último.",
        },
      ],
      reflection:
        "Esta semana fue un punto culminante que conectó todos los conceptos aprendidos anteriormente. Al ver cómo las listas enlazadas se utilizan para implementar colas dinámicas y cómo estas estructuras aparecen en sistemas reales, la teoría cobró vida de manera tangible.\n\nInsights fundamentales que desarrollé:\n\n- Las estructuras de datos no existen aisladas; forman un ecosistema interconectado. Las listas enlazadas se construyen sobre el concepto de nodos, las colas se construyen sobre listas enlazadas, y estructuras más complejas se construirán sobre estas bases.\n\n- Comprender la relación entre estructuras generales (listas simples) y especializadas (colas) me enseñó que el diseño de software a menudo implica restringir funcionalidad para ganar eficiencia, simplicidad y garantías de comportamiento.\n\n- Las listas enlazadas son poderosas precisamente porque no tienen las limitaciones de los arreglos. Permiten construir estructuras completamente dinámicas que se adaptan a necesidades cambiantes, características esenciales en software moderno.\n\n- La aplicabilidad real de las colas me demostró que estas estructuras no son ejercicios académicos; son herramientas críticas utilizadas en sistemas operativos, redes, bases de datos y prácticamente todos los sistemas de software complejos.\n\n- Elegir la estructura correcta no es solo una cuestión técnica; es una decisión de diseño que impacta rendimiento, mantenibilidad y capacidad de evolución del software.\n\nEsta semana cerró un ciclo de aprendizaje fundamental sobre estructuras lineales, dándome la base sólida necesaria para abordar estructuras no lineales más complejas como árboles y grafos, donde estos conceptos se extienden y aplican de nuevas maneras.",
    },
  },
  "9": {
    id: "9",
    title: "SEMANA 9 - Lista Circular",
    content: {
      summary:
        "Esta semana exploré la lista circular, una variante evolucionada de la lista enlazada simple que transforma fundamentalmente el comportamiento de la estructura mediante un cambio aparentemente pequeño: el último nodo, en lugar de apuntar a `null`, establece una referencia circular al primer nodo (head).\n\nEste cambio arquitectónico introduce propiedades significativas:\n\n- Habilita recorridos continuos sin punto de terminación natural\n- Facilita la implementación de procesos repetitivos y algoritmos circulares\n- Elimina la necesidad de verificaciones constantes de `null` en condiciones de borde\n- Proporciona la base para sistemas rotativos y algoritmos de scheduling circular\n\nLa lista circular emerge como solución natural para problemas donde el recorrido debe \"reiniciarse\" automáticamente sin intervención externa, encontrando aplicaciones en sistemas de turnos, juegos de mesa, buffers circulares, algoritmos de planificación de procesos, y cualquier escenario que requiera procesamiento cíclico continuo.",
      development: {
        sections: [
          {
            title: "Concepto y definición de lista circular",
            content:
              "Una lista circular mantiene la estructura básica de una lista enlazada simple pero con una modificación crucial: el campo `siguiente` del último nodo, en lugar de contener `null`, apunta de vuelta al primer nodo de la lista, creando una estructura cíclica cerrada.\n\n**Propiedades distintivas:**\n\n- **Ausencia de final absoluto:** No existe un nodo que apunte a `null`, lo que significa que la lista no tiene un final \"natural\" en el sentido tradicional\n- **Recorrido continuo:** Puede recorrerse indefinidamente en una dirección, permitiendo iteraciones cíclicas\n- **Eficiencia en algoritmos circulares:** Ideal para implementar algoritmos que requieren procesamiento repetitivo sobre los mismos elementos\n- **Manejo de ciclos repetitivos:** Facilita la implementación de sistemas donde los elementos deben procesarse en orden rotativo\n- **Precaución con loops infinitos:** Requiere atención especial en la implementación de algoritmos de recorrido para evitar iteraciones infinitas no deseadas\n\nEsta estructura transforma la lógica de programación, requiriendo pensar en términos de ciclos controlados en lugar de secuencias lineales con inicio y fin.",
          },
          {
            title: "Arquitectura del nodo en listas circulares",
            content:
              "La estructura de nodo en una lista circular es idéntica a la de una lista simple: cada nodo contiene un campo de datos y un campo `siguiente` que almacena la referencia al siguiente nodo. La diferencia radica no en la estructura del nodo, sino en cómo se conectan los nodos entre sí.\n\n**Inicialización especial:**\n\nCuando se crea el primer nodo en una lista circular vacía, su campo `siguiente` se inicializa para apuntar a sí mismo, estableciendo el ciclo inicial. Esta auto-referencia es crucial y diferente al comportamiento de listas simples donde el primer nodo apuntaría a `null`.\n\n**Mantenimiento de la circularidad:**\n\nCada vez que se agrega un nuevo nodo al final de la lista, es esencial actualizar no solo el `siguiente` del último nodo anterior, sino también asegurar que el nuevo último nodo apunte de vuelta a `head`, manteniendo la propiedad circular intacta.\n\nEsta gestión cuidadosa de referencias es fundamental para preservar la integridad estructural de la lista circular.",
          },
          {
            title: "Operaciones fundamentales en listas circulares",
            content:
              "Las operaciones en listas circulares requieren adaptaciones específicas debido a la naturaleza cíclica de la estructura:\n\n**Inserción:**\n\n- Al insertar al final, se recorre la lista hasta encontrar el nodo cuyo `siguiente` apunta a `head` (este es el último nodo en una lista circular)\n- Se actualiza el `siguiente` del último nodo para apuntar al nuevo nodo\n- El nuevo nodo se configura para apuntar a `head`, completando el ciclo\n\n**Recorrido:**\n\n- Se utiliza un bucle `do-while` que procesa el nodo actual y luego avanza al siguiente\n- La condición de terminación es cuando el puntero temporal regresa a `head`, no cuando encuentra `null`\n- Es crítico no usar `while (temp != null)` ya que esto produciría un bucle infinito\n\n**Búsqueda:**\n\n- Similar al recorrido, pero con una condición adicional de terminación: se detiene cuando encuentra el elemento buscado o cuando completa un ciclo completo regresando a `head`\n\n**Inserción al inicio:**\n\n- Requiere encontrar el último nodo (aquel que apunta a `head`)\n- Actualizar su referencia para que apunte al nuevo nodo\n- Configurar el nuevo nodo como `head` y asegurar que apunte al antiguo `head`\n\nEstas operaciones requieren pensar en términos de ciclos completos más que en términos de inicio y fin lineales.",
          },
          {
            title: "Prevención de loops infinitos y manejo de ciclos controlados",
            content:
              "Uno de los desafíos más importantes al trabajar con listas circulares es evitar bucles infinitos accidentales.\n\n**Error común:**\n\nUtilizar una condición de bucle basada en `null`:\n\n```java\nwhile (temp != null) {  // ❌ Esto creará un loop infinito\n    // procesar\n    temp = temp.siguiente;\n}\n```\n\nEn una lista circular, ningún nodo apunta a `null`, por lo que esta condición nunca se cumple, resultando en una iteración infinita.\n\n**Solución correcta:**\n\nUtilizar un bucle `do-while` que compara con `head`:\n\n```java\nNodo temp = head;\ndo {\n    // procesar nodo\n    temp = temp.siguiente;\n} while (temp != head);  // ✅ Termina cuando completa un ciclo\n```\n\n**Estrategias adicionales:**\n\n- **Contador de iteraciones:** En algunos casos, puede ser útil incluir un contador para limitar el número máximo de iteraciones\n- **Marcas temporales:** Para algoritmos complejos, se pueden marcar nodos visitados para evitar procesamiento múltiple\n- **Condiciones de terminación específicas:** Diseñar condiciones que dependan del problema específico, no solo de la estructura de la lista\n\nDominar el manejo de ciclos controlados es esencial para trabajar efectivamente con listas circulares.",
          },
          {
            title: "Casos de uso y aplicaciones prácticas",
            content:
              "Las listas circulares encuentran aplicación en múltiples contextos donde el procesamiento cíclico es natural o beneficioso:\n\n**Sistemas de Scheduling (Round Robin):**\n\n- Los sistemas operativos utilizan estructuras circulares para implementar algoritmos de planificación de procesos donde cada proceso recibe un quantum de tiempo de CPU y luego pasa al siguiente, creando un ciclo continuo\n\n**Sistemas de turnos y juegos:**\n\n- Juegos de mesa y aplicaciones donde los jugadores toman turnos en orden rotativo (Jugador 1 → 2 → 3 → 1) se modelan naturalmente con listas circulares\n\n**Buffers circulares:**\n\n- Sistemas de streaming de audio y video utilizan buffers circulares donde los datos se escriben y leen continuamente, y cuando se alcanza el final del buffer, se reinicia desde el inicio\n\n**Problema de Josephus:**\n\n- Un problema clásico donde n personas están dispuestas en círculo y se eliminan cada k-ésima persona hasta que queda una. Las listas circulares proporcionan una solución elegante\n\n**Simulaciones de eventos:**\n\n- Sistemas que simulan eventos que ocurren en ciclos repetitivos, como ciclos de día/noche, estaciones, o procesos periódicos\n\n**Sistemas de rotación:**\n\n- Cualquier sistema donde los elementos deben procesarse en orden rotativo sin un punto de inicio o fin definido\n\nCada aplicación aprovecha la propiedad de continuidad que las listas circulares proporcionan sobre las listas simples lineales.",
          },
        ],
      },
      examples: [
        {
          title: "Implementación básica de lista circular",
          language: "java",
          code: `public class ListaCircular {
    
    private Nodo cabeza;
    
    public ListaCircular() {
        cabeza = null;
    }
    
    // Insertar al final
    public void insertar(int valor) {
        Nodo nuevo = new Nodo(valor);
        
        if (cabeza == null) {
            cabeza = nuevo;
            nuevo.siguiente = cabeza; // Apunta a sí mismo
            return;
        }
        
        Nodo actual = cabeza;
        // Buscar el último nodo (aquel que apunta a cabeza)
        while (actual.siguiente != cabeza) {
            actual = actual.siguiente;
        }
        
        actual.siguiente = nuevo;
        nuevo.siguiente = cabeza; // Completar el ciclo
    }
    
    // Mostrar todos los elementos
    public void mostrar() {
        if (cabeza == null) return;
        
        Nodo actual = cabeza;
        do {
            System.out.print(actual.valor + " → ");
            actual = actual.siguiente;
        } while (actual != cabeza); // Termina cuando vuelve a cabeza
        
        System.out.println("(ciclo completo)");
    }
    
    // Buscar elemento
    public boolean buscar(int valor) {
        if (cabeza == null) return false;
        
        Nodo actual = cabeza;
        do {
            if (actual.valor == valor) return true;
            actual = actual.siguiente;
        } while (actual != cabeza);
        
        return false;
    }
}`,
        },
        {
          title: "Inserción al inicio en lista circular",
          language: "java",
          code: `public void insertarInicio(int valor) {
    Nodo nuevo = new Nodo(valor);
    
    if (cabeza == null) {
        cabeza = nuevo;
        nuevo.siguiente = cabeza;
        return;
    }
    
    // Encontrar el último nodo
    Nodo ultimo = cabeza;
    while (ultimo.siguiente != cabeza) {
        ultimo = ultimo.siguiente;
    }
    
    // Insertar nuevo nodo al inicio
    nuevo.siguiente = cabeza;
    ultimo.siguiente = nuevo;
    cabeza = nuevo; // Actualizar cabeza
}`,
        },
        {
          title: "Recorrido seguro evitando loops infinitos",
          language: "java",
          code: `// ❌ INCORRECTO - crea loop infinito
public void recorrerIncorrecto() {
    Nodo temp = cabeza;
    while (temp != null) {  // Nunca será null en lista circular
        System.out.println(temp.valor);
        temp = temp.siguiente;  // Loop infinito
    }
}

// ✅ CORRECTO - termina correctamente
public void recorrerCorrecto() {
    if (cabeza == null) return;
    
    Nodo temp = cabeza;
    do {
        System.out.println(temp.valor);
        temp = temp.siguiente;
    } while (temp != cabeza);  // Termina cuando completa un ciclo
}`,
        },
      ],
      diagrams: [
        {
          title: "Representación visual de lista circular",
          description:
            "Diagrama que muestra cómo los nodos de una lista circular están conectados, con el último nodo apuntando de vuelta al primero, formando un ciclo cerrado sin punto de terminación.",
        },
      ],
      reflection:
        "Comprender la lista circular representó un cambio significativo en mi forma de pensar sobre estructuras de datos. Mientras que las listas simples tienen un inicio y un final claramente definidos, la lista circular transforma esa lógica fundamental: todo se vuelve continuo y cíclico.\n\nAspectos transformadores que internalicé:\n\n- Manejar estructuras sin un fin explícito requiere pensar de manera diferente. La ausencia de un nodo terminal (null) significa que los algoritmos de recorrido y búsqueda deben diseñarse con condiciones de terminación basadas en completar ciclos, no en encontrar el final.\n\n- Pensar en términos de ciclos, vueltas y repeticiones naturales abre nuevas posibilidades algorítmicas. Problemas que parecían complejos con estructuras lineales se vuelven más elegantes cuando se modelan como ciclos.\n\n- Diseñar algoritmos que operan sobre estructuras circulares requiere especial atención para evitar loops infinitos, pero también permite crear soluciones más fluidas y optimizadas que aprovechan la continuidad de la estructura.\n\n- Ver cómo los sistemas reales, especialmente sistemas operativos y de redes, utilizan estructuras circulares para manejar procesos repetitivos o secuenciales me demostró la relevancia práctica de estas estructuras más allá del contexto académico.\n\nLa lista circular me enseñó que pequeños cambios arquitectónicos pueden transformar completamente el comportamiento y aplicabilidad de una estructura de datos, preparándome para entender cómo variaciones similares dan lugar a estructuras aún más sofisticadas.",
    },
  },
  "10": {
    id: "10",
    title: "SEMANA 10 - Lista Circular Doble",
    content: {
      summary:
        "Esta semana estudié la Lista Circular Doble, una estructura de datos avanzada que representa la síntesis y evolución de los conceptos aprendidos en semanas anteriores, combinando dos características fundamentales:\n\n- **Lista doblemente enlazada:** Cada nodo mantiene referencias tanto al siguiente como al anterior nodo, permitiendo navegación bidireccional\n- **Lista circular:** El último nodo conecta con el primero y viceversa, eliminando cualquier punto de terminación absoluto\n\nEsta combinación crea una estructura extremadamente versátil y potente:\n\n- Permite recorridos eficientes en ambas direcciones (hacia adelante y hacia atrás)\n- No posee un \"inicio\" o \"final\" absoluto en el sentido tradicional, ya que cualquier nodo puede funcionar como punto de entrada\n- Reduce significativamente los costos de navegación en comparación con estructuras unidireccionales\n- Proporciona eficiencia óptima para inserción y eliminación en cualquier posición\n\nEsta semana marca la culminación de la fase de estructuras lineales dinámicas, consolidando todos los conceptos aprendidos y preparando el terreno conceptual para estructuras no lineales más complejas como árboles y grafos.",
      development: {
        sections: [
          {
            title: "Concepto y definición de lista circular doble",
            content:
              "Una lista circular doble es una estructura de datos que combina la navegación bidireccional de las listas doblemente enlazadas con la continuidad cíclica de las listas circulares. Cada nodo en esta estructura mantiene dos referencias:\n\n- **Campo `siguiente`:** Apunta al siguiente nodo en la secuencia\n- **Campo `anterior`:** Apunta al nodo previo en la secuencia\n\n**Propiedades únicas:**\n\n- **Circularidad bidireccional:** El primer nodo tiene su campo `anterior` apuntando al último nodo, y el último nodo tiene su campo `siguiente` apuntando al primer nodo, creando un ciclo completo en ambas direcciones\n- **Ausencia de extremos absolutos:** No existe un concepto de \"principio\" o \"fin\" absoluto; cualquier nodo puede servir como punto de entrada y navegación puede continuar indefinidamente en cualquier dirección\n- **Navegación simétrica:** Moverse hacia adelante o hacia atrás desde cualquier punto es igualmente eficiente y directo\n- **Operaciones O(1):** Tanto la inserción como la eliminación de nodos pueden realizarse en tiempo constante cuando se conoce el nodo de referencia\n\nEsta estructura representa el pináculo de flexibilidad en estructuras lineales dinámicas, ofreciendo capacidades que ninguna variante anterior proporcionaba individualmente.",
          },
          {
            title: "Arquitectura del nodo en listas circulares dobles",
            content:
              "La estructura de nodo en una lista circular doble contiene tres componentes esenciales:\n\n1. **Campo de datos:** Almacena el valor del elemento (puede ser de cualquier tipo)\n2. **Campo `siguiente`:** Referencia al siguiente nodo en la secuencia circular\n3. **Campo `anterior`:** Referencia al nodo previo en la secuencia circular\n\n**Inicialización del primer nodo:**\n\nCuando se crea el primer nodo en una lista vacía, ambos campos (`siguiente` y `anterior`) se configuran para apuntar al nodo mismo, estableciendo la estructura circular inicial donde un solo elemento forma un ciclo completo consigo mismo.\n\n**Mantenimiento de referencias:**\n\nCada operación que modifica la lista (inserción, eliminación) debe actualizar cuidadosamente cuatro referencias:\n- El `siguiente` del nodo anterior al punto de inserción/eliminación\n- El `anterior` del nodo siguiente al punto de inserción/eliminación\n- El `siguiente` del nodo insertado (o removido)\n- El `anterior` del nodo insertado (o removido)\n\nEsta gestión cuidadosa de múltiples punteros es más compleja que en estructuras anteriores pero proporciona flexibilidad sin precedentes.",
          },
          {
            title: "Operaciones fundamentales en listas circulares dobles",
            content:
              "Las operaciones en listas circulares dobles aprovechan la navegación bidireccional para lograr eficiencia óptima:\n\n**Inserción al final:**\n\n- Se accede al último nodo mediante `head.anterior` (en lugar de recorrer toda la lista)\n- Se crea el nuevo nodo y se actualizan cuatro referencias: `ultimo.siguiente`, `nuevo.anterior`, `nuevo.siguiente` (apunta a head), y `head.anterior` (apunta al nuevo nodo)\n- Complejidad: O(1) debido al acceso directo mediante `head.anterior`\n\n**Inserción al inicio:**\n\n- Similar a inserción al final, pero se actualiza `head` para apuntar al nuevo nodo\n- Las cuatro referencias se actualizan manteniendo la circularidad\n- Complejidad: O(1)\n\n**Eliminación de un nodo:**\n\n- Se localiza el nodo a eliminar\n- Se actualizan las referencias del nodo anterior y siguiente para \"saltarse\" el nodo a eliminar\n- Si el nodo eliminado era `head`, se actualiza `head` al siguiente nodo\n- Complejidad: O(1) si se conoce el nodo, O(n) si se busca por valor\n\n**Recorrido bidireccional:**\n\n- **Hacia adelante:** Similar a lista circular simple, usando `siguiente`\n- **Hacia atrás:** Utiliza `anterior` para recorrer en sentido inverso\n- Ambos recorridos terminan cuando regresan al punto de inicio\n\nLa capacidad de navegar eficientemente en ambas direcciones distingue esta estructura de todas las anteriores.",
          },
          {
            title: "Comparación evolutiva de estructuras de listas",
            content:
              "La lista circular doble representa la culminación de una evolución de estructuras lineales dinámicas:\n\n**Lista Simple:**\n\n- Un solo enlace por nodo (`siguiente`)\n- Lineal con inicio y fin definidos\n- Navegación solo hacia adelante\n- Ideal para recorridos simples y unidireccionales\n\n**Lista Circular Simple:**\n\n- Un solo enlace por nodo\n- Circular, sin fin definido\n- Navegación cíclica hacia adelante\n- Ideal para procesos cíclicos unidireccionales\n\n**Lista Doble (no circular):**\n\n- Dos enlaces por nodo (`siguiente` y `anterior`)\n- Lineal con inicio y fin definidos\n- Navegación bidireccional\n- Ideal para navegación flexible pero con límites\n\n**Lista Circular Doble:**\n\n- Dos enlaces por nodo\n- Circular en ambas direcciones\n- Navegación bidireccional continua\n- Ideal para estructuras complejas, sistemas rotativos bidireccionales, y casos donde se requiere máxima flexibilidad\n\n**Evolución de complejidad y capacidad:**\n\nCada variante agrega capacidades pero también complejidad. La lista circular doble combina todas las ventajas de sus predecesoras, ofreciendo la máxima flexibilidad a costa de mayor complejidad de implementación y gestión de memoria.",
          },
          {
            title: "Aplicaciones reales y casos de uso avanzados",
            content:
              "Las listas circulares dobles encuentran aplicación en sistemas sofisticados donde se requiere navegación flexible y procesamiento continuo:\n\n**Navegadores web (pestañas circulares):**\n\n- Permiten navegar hacia adelante o atrás entre pestañas sin límite, creando una experiencia de navegación fluida donde el último elemento conecta con el primero\n\n**Sistemas operativos:**\n\n- **Planificación circular bidireccional:** Algoritmos de scheduling que pueden avanzar o retroceder en la cola de procesos\n- **Gestión de memoria:** Sistemas que gestionan bloques de memoria en estructuras circulares permitiendo búsqueda eficiente en ambas direcciones\n\n**Reproductores de multimedia:**\n\n- Listas de reproducción que pueden avanzar o retroceder continuamente, donde después de la última canción se reproduce la primera, y viceversa\n- Permite navegación bidireccional fluida sin puntos muertos\n\n**Editores de texto avanzados:**\n\n- Historial de deshacer/rehacer que puede navegarse en ambas direcciones\n- Buffer circular que permite edición continua en documentos largos\n\n**Estructuras internas en motores de juegos:**\n\n- Sistemas de turnos dinámicos donde los jugadores pueden moverse en cualquier dirección\n- Gestión de entidades en ciclos bidireccionales\n\n**Buffers circulares avanzados:**\n\n- Sistemas de streaming donde los datos se escriben y leen en ambas direcciones\n- Aplicaciones de audio y video que requieren acceso bidireccional eficiente\n\nCada aplicación aprovecha la combinación única de continuidad y bidireccionalidad que solo las listas circulares dobles proporcionan.",
          },
          {
            title: "Razones para usar listas circulares dobles en sistemas",
            content:
              "Las listas circulares dobles se prefieren en sistemas complejos por múltiples razones técnicas y prácticas:\n\n**Continuidad sin condiciones especiales:**\n\n- La naturaleza circular elimina la necesidad de manejar casos especiales para el inicio y final de la lista\n- Los algoritmos pueden asumir que siempre hay un siguiente y un anterior, simplificando la lógica\n\n**Navegación bidireccional eficiente:**\n\n- Moverse hacia adelante o hacia atrás desde cualquier punto es igualmente eficiente\n- No requiere recorrer desde el inicio para llegar a un elemento previo\n- Acceso O(1) al último elemento mediante `head.anterior`\n\n**Eliminación e inserción optimizadas:**\n\n- Cuando se conoce un nodo de referencia, insertar o eliminar nodos adyacentes es O(1)\n- No se requiere desplazamiento de elementos como en arreglos\n- La estructura se adapta dinámicamente sin reorganización costosa\n\n**Modelado de ciclos naturales:**\n\n- Muchos sistemas del mundo real operan en ciclos donde no existe un inicio o fin absoluto\n- Estructuras como listas circulares dobles modelan estos sistemas de manera más natural que estructuras lineales\n\n**Eficiencia en operaciones complejas:**\n\n- Algoritmos que requieren navegación en múltiples direcciones se benefician significativamente\n- Operaciones como rotación, inversión, o recorrido parcial son más eficientes\n\n**Escalabilidad y flexibilidad:**\n\n- La estructura puede crecer o reducirse dinámicamente sin límites predefinidos\n- Permite implementaciones de estructuras de datos más complejas como deques (double-ended queues) con eficiencia óptima\n\nEstas características hacen que las listas circulares dobles sean la elección preferida para sistemas que requieren máxima flexibilidad y eficiencia en navegación.",
          },
        ],
      },
      examples: [
        {
          title: "Clase Nodo para lista circular doble",
          language: "java",
          code: `class NodoDoble {
    int valor;
    NodoDoble siguiente;
    NodoDoble anterior;
    
    public NodoDoble(int valor) {
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }
}`,
        },
        {
          title: "Implementación completa de lista circular doble",
          language: "java",
          code: `public class ListaCircularDoble {
    
    private NodoDoble cabeza;
    
    public ListaCircularDoble() {
        cabeza = null;
    }
    
    // Insertar al final - O(1) gracias a cabeza.anterior
    public void insertar(int valor) {
        NodoDoble nuevo = new NodoDoble(valor);
        
        if (cabeza == null) {
            cabeza = nuevo;
            cabeza.siguiente = cabeza;
            cabeza.anterior = cabeza;
            return;
        }
        
        NodoDoble ultimo = cabeza.anterior;
        
        // Actualizar cuatro referencias
        ultimo.siguiente = nuevo;
        nuevo.anterior = ultimo;
        nuevo.siguiente = cabeza;
        cabeza.anterior = nuevo;
    }
    
    // Insertar al inicio
    public void insertarInicio(int valor) {
        NodoDoble nuevo = new NodoDoble(valor);
        
        if (cabeza == null) {
            cabeza = nuevo;
            cabeza.siguiente = cabeza;
            cabeza.anterior = cabeza;
            return;
        }
        
        NodoDoble ultimo = cabeza.anterior;
        
        nuevo.siguiente = cabeza;
        nuevo.anterior = ultimo;
        cabeza.anterior = nuevo;
        ultimo.siguiente = nuevo;
        cabeza = nuevo;
    }
    
    // Mostrar en sentido normal
    public void mostrar() {
        if (cabeza == null) return;
        
        NodoDoble actual = cabeza;
        do {
            System.out.print(actual.valor + " ↔ ");
            actual = actual.siguiente;
        } while (actual != cabeza);
        
        System.out.println("(ciclo completo)");
    }
    
    // Mostrar en sentido inverso
    public void mostrarReverso() {
        if (cabeza == null) return;
        
        NodoDoble actual = cabeza.anterior;
        do {
            System.out.print(actual.valor + " ↔ ");
            actual = actual.anterior;
        } while (actual != cabeza.anterior);
        
        System.out.println("(ciclo inverso completo)");
    }
    
    // Eliminar nodo por valor
    public void eliminar(int valor) {
        if (cabeza == null) return;
        
        NodoDoble actual = cabeza;
        
        do {
            if (actual.valor == valor) {
                // Si es el único nodo
                if (actual.siguiente == actual) {
                    cabeza = null;
                    return;
                }
                
                // Actualizar referencias del anterior y siguiente
                actual.anterior.siguiente = actual.siguiente;
                actual.siguiente.anterior = actual.anterior;
                
                // Si eliminamos cabeza, actualizar
                if (actual == cabeza) {
                    cabeza = actual.siguiente;
                }
                
                return;
            }
            actual = actual.siguiente;
        } while (actual != cabeza);
    }
}`,
        },
      ],
      diagrams: [
        {
          title: "Estructura de lista circular doble",
          description:
            "Diagrama que ilustra cómo los nodos de una lista circular doble están conectados bidireccionalmente, mostrando tanto los enlaces siguiente como anterior, y cómo forman un ciclo completo en ambas direcciones.",
        },
      ],
      reflection:
        "La lista circular doble representó la estructura más sofisticada que he estudiado hasta ahora, y su comprensión marcó un hito significativo en mi desarrollo. Esta estructura demuestra cómo la combinación inteligente de conceptos fundamentales (navegación bidireccional y circularidad) puede crear herramientas extremadamente poderosas.\n\nLecciones transformadoras que internalicé:\n\n- Los punteros pueden construir estructuras increíblemente potentes cuando se combinan correctamente. La capacidad de tener referencias bidireccionales en una estructura circular crea posibilidades que ninguna variante individual proporciona.\n\n- Pensar en procesos sin principio ni final absoluto requiere un cambio de paradigma. En una lista circular doble, cualquier nodo puede ser punto de entrada y la navegación puede continuar indefinidamente en cualquier dirección, lo cual modela muchos sistemas del mundo real de manera más natural.\n\n- Entender navegación bidireccional eficiente abre nuevas posibilidades algorítmicas. La capacidad de moverse hacia adelante o hacia atrás con igual facilidad desde cualquier punto elimina muchas limitaciones de estructuras unidireccionales.\n\n- Diseñar algoritmos que operan sobre estructuras donde la eficiencia depende de operaciones O(1) requiere pensar cuidadosamente sobre qué operaciones son críticas y cómo optimizarlas mediante el diseño de la estructura de datos.\n\n- Modelar ciclos infinitos de manera controlada es un desafío que se vuelve más manejable con estructuras diseñadas específicamente para este propósito.\n\nEsta semana completó mi comprensión de estructuras lineales dinámicas, consolidando todos los conceptos aprendidos desde listas simples hasta esta estructura avanzada. Esta base sólida me prepara para abordar estructuras no lineales como árboles y grafos, donde estos principios se extienden y aplican de nuevas y emocionantes maneras.",
    },
  },
};

