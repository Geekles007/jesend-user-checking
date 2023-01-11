import * as yup from "yup";
import {IAcceptProps} from "../models/IAcceptProps";

export type TAccept = "acceptFaceScan" | "acceptPolitics";

class AcceptController {

    private readonly ACCEPT_FIELDS: IAcceptProps = {
        acceptFaceScan: 'acceptFaceScan',
        acceptPolitics: 'acceptPolitics',
    };

    get fields(): IAcceptProps {
        return this.ACCEPT_FIELDS;
    }

    get getMySchema() {
        return yup.object().shape({
            acceptFaceScan: yup.boolean().required(),
            acceptPolitics: yup.boolean().required(),
        });
    }

    onSubmit(data: any) {
        console.log(data);
    }

    onErrors(data: any) {
        console.log(data);
    }

}

export default new AcceptController();