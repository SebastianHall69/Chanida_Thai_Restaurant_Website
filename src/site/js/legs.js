"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        // Check script runs
        const people = ['James', 'Sebastian'];
        people.forEach((name) => {
            console.log(name + ' has absolutely built forearms');
        });
        // Get balls
        const endpoint = 'https://4mcj2hm4m5.execute-api.us-west-1.amazonaws.com/ReturnBalls';
        const response = yield fetch(endpoint, { method: 'POST' });
        const json = yield response.json();
        console.log(`Got Response: ${json.msg}`);
    });
}
main();
//# sourceMappingURL=legs.js.map