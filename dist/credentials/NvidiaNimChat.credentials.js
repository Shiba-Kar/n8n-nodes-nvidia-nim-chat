"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NvidiaNimChat = void 0;
class NvidiaNimChat {
    constructor() {
        this.name = 'nvidiaNimChat';
        this.displayName = 'NVIDIA NIM Chat';
        this.documentationUrl = 'https://docs.nvidia.com/nim/';
        this.properties = [
            {
                displayName: 'API Key',
                name: 'apiKey',
                type: 'string',
                typeOptions: {
                    password: true,
                },
                default: '',
                required: true,
                description: 'Your NVIDIA NGC API Key. Generate one at <a href="https://ngc.nvidia.com" target="_blank">ngc.nvidia.com</a>',
            },
            {
                displayName: 'Base URL',
                name: 'baseUrl',
                type: 'string',
                default: 'https://integrate.api.nvidia.com/v1',
                description: 'The base URL for NVIDIA NIM API endpoints. Leave default for NVIDIA-hosted endpoints.',
                required: true,
                placeholder: 'https://integrate.api.nvidia.com/v1',
            },
        ];
        this.authenticate = {
            type: 'generic',
            properties: {
                headers: {
                    Authorization: '=Bearer {{$credentials.apiKey}}',
                },
            },
        };
        this.test = {
            request: {
                baseURL: '={{$credentials.baseUrl}}',
                url: '/models',
                method: 'GET',
            },
        };
    }
}
exports.NvidiaNimChat = NvidiaNimChat;
//# sourceMappingURL=NvidiaNimChat.credentials.js.map