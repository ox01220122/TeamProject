const db = require('../models');
const Participation = db.Participation;
// 테스트 데이터 저장 API
exports.createParticipation = async (req, res) => {
    const { user_id, test_name, result } = req.body;

    try {
        const findResult = await Participation.findAll({
            where: {
                user_id: user_id,
                test_name: test_name,
            },
        });

        console.log(findResult, 'findResult');

        if (!findResult || findResult.length === 0) {
            await Participation.create({ user_id, test_name, result });
            res.send({ message: 'update' });
        } else {
            await Participation.update({ result: result }, { where: { user_id: user_id, test_name: test_name } });
            res.send({ message: 'update' });
        }
    } catch (error) {
        console.error('테스트 결과 저장 오류:', error);
        res.status(500).send({ message: '테스트 결과 저장 중 오류가 발생했습니다.' });
    }
};
