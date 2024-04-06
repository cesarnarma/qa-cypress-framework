import{getAllEntriesSchema} from "../../schemas/get-all-entries-schema"

describe('Entries feature', () => {
    it("TC-003: GET All entriest", () => {
        cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.not.be.null;
          cy.validateSchema(getAllEntriesSchema, response.body);
          cy.log(JSON.stringify(response.body));
        });
      });

});