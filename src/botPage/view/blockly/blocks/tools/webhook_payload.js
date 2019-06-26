import { translate } from '../../../../../common/i18n';
import { expectValue } from '../shared';

Blockly.Blocks.webhook_payload = {
    init() {
        this.jsonInit({
            message0: translate('Key: %1 Value: %2'),
            args0   : [
                {
                    type: 'field_input',
                    name: 'WEBHOOK_KEY',
                    text: 'default',
                },
                {
                    type: 'input_value',
                    name: 'WEBHOOK_VALUE',
                },
            ],
            colour : '#dedede',
            output : null,
            tooltip: translate('Payload for webhook'),
        });
    },
};

Blockly.JavaScript.webhook_payload = block => {
    const key = block.getFieldValue('WEBHOOK_KEY') || '';
    const value = expectValue(block, 'WEBHOOK_VALUE');

    if (!key || !value) {
        return '';
    }

    return [`{"${key}":${value}}`, Blockly.JavaScript.ORDER_ATOMIC];
};