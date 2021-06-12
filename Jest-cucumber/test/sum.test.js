import { loadFeature, defineFeature } from "jest-cucumber";
import { sum } from "../sum";

const feature = loadFeature("./test/specs/features/basic-scenarios.feature");

defineFeature(feature, (test) => {
  let suma;
  beforeEach(() => {});

  test("Ingresando una suma", ({ given, when, then }) => {
    given(
      "yo como desarrollador tengo previmente inicializada mi respuesta",
      () => {
        suma = 0;
      }
    );

    when("ingreso los valores correctos a sumar", () => {
      suma = sum(2, 3);
    });

    then("yo deberia tener una respuesta exitosa", () => {
      expect(suma).toBe(5);
    });
  });
});
