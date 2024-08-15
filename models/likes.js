import { Base } from "./base.js";
import userModel from "./user.js";

class Likes extends Base{
    table="likes"

    findWhere(conditionals) {
        return super
            .findWhere(conditionals)
            .map(likes => {
                likes.user = userModel.findOne({ id: likes.id }).omit('login', 'password')
                return likes
            })
    }

    
}

export default new Likes()