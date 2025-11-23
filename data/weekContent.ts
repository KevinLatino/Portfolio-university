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
        "La recursividad es una técnica fundamental en programación donde una función se llama a sí misma para resolver problemas complejos dividiéndolos en versiones más pequeñas del mismo problema.\n\nEs uno de los pilares del pensamiento algorítmico, especialmente útil para problemas que presentan una **estructura repetitiva**, como árboles, búsqueda, generación de combinaciones y cálculos matemáticos definidos mediante relaciones recursivas.\n\nDurante esta semana, el objetivo fue dominar el concepto de recursión pura, identificar cuándo usarla y comprender cómo funciona el *stack de llamadas*.",
      development: {
        sections: [
          {
            title: "¿Qué es la recursividad?",
            content:
              "Recursividad, es una función que se llama a sí misma hasta llegar a una condición base.\n\nEsto divide el problema en subproblemas más simples que se resuelven de manera idéntica.",
          },
          {
            title: "Componentes de una función recursiva",
            content:
              "1. **Caso base:** la condición que detiene la recursión.\n\n2. **Caso recursivo:** parte del problema que se resuelve llamando a la función otra vez.\n\n3. **Progreso:** cada llamada debe acercarse al caso base.",
          },
          {
            title: "Ejemplo Conceptual",
            content:
              "Supongamos el problema de sumar los primeros *n* números:\n\n```\nsum(n) = n + sum(n - 1)\n```\n\nCaso base:\n\n```\nsum(1) = 1\n```\n\nAquí podemos visualizar la naturaleza repetitiva que se descompone hacia algo cada vez más pequeño.",
          },
          {
            title: "¿Cómo funciona a nivel interno? (Stack de llamadas)",
            content:
              "Cada llamada recursiva se coloca en la pila de ejecución.\n\n**Ejemplo para sum(4):**\n\n1. sum(4)\n2. sum(3)\n3. sum(2)\n4. sum(1) → retorna 1\n\nLuego la pila comienza a vaciarse:\n\n- sum(2) retorna 2 + 1\n- sum(3) retorna 3 + 3\n- sum(4) retorna 4 + 6 = **10**\n\nEste proceso es muy similar al comportamiento de **una pila (stack)**, concepto que estudiarás en semanas posteriores.",
          },
        ],
      },
      examples: [
        {
          title: "Ejemplo de recursividad simple: Factorial",
          language: "java",
          code: `public class Factorial {

    public static int factorial(int n) {
        if (n == 0 || n == 1) {
            return 1; // Caso base
        }
        return n * factorial(n - 1); // Caso recursivo
    }

    public static void main(String[] args) {
        System.out.println(factorial(5)); // Output: 120
    }
}`,
        },
        {
          title: "Ejemplo de recursión descendente",
          language: "java",
          code: `public static int sumarHasta(int n) {
    if (n == 0) return 0; // caso base
    return n + sumarHasta(n - 1);
}`,
        },
        {
          title: "Recursividad con condición múltiple (ejemplo para enseñanza)",
          language: "java",
          code: `public static int potencia(int base, int exponente) {
    if (exponente == 0) return 1;
    if (exponente == 1) return base;
    return base * potencia(base, exponente - 1);
}`,
        },
      ],
      diagrams: [
        {
          title: "Flujo general de una función recursiva",
          description:
            "Diagrama que muestra el flujo de ejecución de una función recursiva desde la llamada inicial hasta el caso base y el retorno de valores.",
        },
      ],
      reflection:
        "Esta semana entendí que la recursividad no es solo código que se llama a sí mismo, es una forma completamente diferente de pensar. Me ayudó a estructurar problemas como un proceso que se simplifica paso a paso, igual que 'desarmar' un rompecabezas.\n\nIdentifiqué que:\n\n- Si no defino un caso base claro → la función puede generar un ciclo infinito.\n\n- Si no reduzco el problema correctamente → la pila de llamadas puede desbordarse.\n\n- La recursión es muy poderosa, pero debe usarse con cuidado por su costo en memoria.\n\nEsto sienta las bases para comprender la recursión en Fibonacci, Torres de Hanoi, árboles y algoritmos de búsqueda.",
    },
  },
};

