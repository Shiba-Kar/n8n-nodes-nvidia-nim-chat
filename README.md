# n8n-nodes-nvidia-nim-chat

Use [NVIDIA NIM](https://www.nvidia.com/en-us/ai-data-science/foundation-models/) inference microservices as the chat language model in [n8n](https://n8n.io/) **AI Agent** and **AI Chain** workflows. The node speaks the OpenAI-compatible API surface that NIM exposes, so you can point it at NVIDIA-hosted endpoints or your own NIM deployment.

[n8n](https://n8n.io/) is a [fair-code licensed](https://docs.n8n.io/sustainable-use-license/) workflow automation platform.

## Contents

- [Installation](#installation)
- [Quick start](#quick-start)
- [What this node does](#what-this-node-does)
- [Credentials](#credentials)
- [Compatibility](#compatibility)
- [Developing this package](#developing-this-package)
- [Resources](#resources)
- [Version history](#version-history)

## Installation

1. In n8n, open **Settings → Community nodes** (or your admin's equivalent).
2. Install the package **`n8n-nodes-nvidia-nim-chat`**.

For detailed steps, security notes, and Docker or CLI options, see the official guide: [Installing community nodes](https://docs.n8n.io/integrations/community-nodes/installation/).

## Quick start

1. **Create credentials**  
   In n8n, add **NVIDIA NIM Chat API** credentials (see [Credentials](#credentials)).

2. **Add the node**  
   Add **NVIDIA NIM Chat Model** to your workflow.

3. **Connect it**  
   Wire the node's **Model** output to the **Chat Model** input of an **AI Agent** or **AI Chain** node (this node has no regular inputs; it only supplies the model).

4. **Pick a model**  
   The **Model** dropdown is loaded from your `GET /models` endpoint. Choose the model your NIM deployment exposes.

5. **Optional tuning**  
   Open **Options** for temperature, top-p, max tokens, retries, timeouts, and response format (text or JSON).

If you are new to n8n, the [Try it out](https://docs.n8n.io/try-it-out/) docs help you run your first workflows.

## What this node does

| Aspect | Details |
|--------|---------|
| **Role** | Supplies a chat LLM to AI Agent / AI Chain (output type: AI language model). |
| **API** | OpenAI-compatible chat completions against your configured **Base URL**. |
| **Models** | List is fetched dynamically from the API so it matches your account or self-hosted NIM. |

**JSON responses:** If you set **Response Format** to **JSON**, include the word `json` in your prompt (as noted in the node UI) so the model returns valid JSON.

## Credentials

Create **NVIDIA NIM Chat API** credentials in n8n:

| Field | Description |
|--------|-------------|
| **API Key** | Your NVIDIA NGC API key. Create or manage keys at [NVIDIA NGC](https://ngc.nvidia.com). Stored and sent as a Bearer token in the `Authorization` header. |
| **Base URL** | Root URL for the OpenAI-compatible API. Default: `https://integrate.api.nvidia.com/v1`. Use your own base URL if you run NIM on-premises or in your cloud. |

Use **Test** on the credential to verify access; it calls `GET /models` on your base URL.

## Compatibility

- **n8n:** Use a version that supports **community nodes** and built-in **AI Agent** / **AI Chain** (and LangChain-style model inputs). This package targets [n8n node API version 1](https://docs.n8n.io/integrations/creating-nodes/build/reference/node-versioning/).
- A specific minimum n8n version is not pinned in this repo; if something fails to appear in the editor, upgrade n8n first.

## Developing this package

Clone the repository, install dependencies, then use the n8n node CLI:

```bash
npm install
npm run build    # production build → dist/
npm run dev      # local n8n with this package (see n8n-node dev docs)
npm run lint     # eslint via n8n-node
```

Release/version notes live in [CHANGELOG.md](./CHANGELOG.md).

## Resources

- [NVIDIA NIM documentation](https://docs.nvidia.com/nim/)
- [n8n community nodes](https://docs.n8n.io/integrations/#community-nodes)
- [Creating nodes overview](https://docs.n8n.io/integrations/creating-nodes/overview/)
- [Repository](https://github.com/Shiba-Kar/n8n-nodes-nvidia-nim-chat)

## Version history

See [CHANGELOG.md](./CHANGELOG.md) for release history.
