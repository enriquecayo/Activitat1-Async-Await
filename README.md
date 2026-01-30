# Activitat 1: Async / Await

Aquest projecte és una pràctica per entendre el funcionament de l'asincronia en JavaScript, comparant el patró de **callbacks** amb **Promises** i **Async/Await**.

## Descripció

L'activitat es divideix en dues parts utilitzant una funció base `getRandomSlow` que simula una càrrega asíncrona de 1000ms:

- **Part A (Callback):** Mostra com el codi no s'atura. S'executa el flux principal (1, 2) i el resultat arriba més tard de forma asíncrona.
- **Part B (Async/Await):** Mostra com "promisificar" una funció i utilitzar `await` per forçar un ordre seqüencial (1, resultat, 2).

## Requisits

- [Node.js](https://nodejs.org/) instal·lat.

## Instal·lació i Execució

1. Descarrega o clona el fitxer `main.js`.
2. Obre una terminal a la carpeta del fitxer.
3. Executa la comanda següent:

```bash
node main.js
```

## Resultat Esperat

En executar el codi, veuràs la diferència de flux a la terminal:

```text
Part A (Callback)
1
2
<número aleatori>

Part B (Async/Await)
1
<número aleatori>
2
```

## Estructura del Codi

- `getRandomSlow`: Funció original del Pol basada en callbacks.
- `getRandomPromise`: Funció que converteix la funció original en una Promesa.
- `provaPartA`: Execució del patró no bloquejant.
- `provaPartB`: Execució del patró bloquejant mitjançant `async/await`.
- `main`: Funció coordinadora per assegurar que les proves s'executen una darrere l'altra.
```