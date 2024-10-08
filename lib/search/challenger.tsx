import { createOpenAI } from '@ai-sdk/openai';
import { CoreMessage, generateObject } from 'ai';
import { z } from 'zod';

import { challengerPrompt } from '@/lib/prompt';
import { SimpleModel } from '@/types/model';
import { ProviderSetting } from '@/types/settings';

export const challengerSchema = z.object({
    next: z.enum(['proceed', 'challenge']),
});

export const challenger = async (messages: CoreMessage[], model: SimpleModel, currentProviderSettings: ProviderSetting | null) => {
    'use server';

    const openai = createOpenAI({
        apiKey: currentProviderSettings?.OpenAI?.apiKey ?? process.env.OPENAI_API_KEY ?? '',
        baseURL: currentProviderSettings?.OpenAI?.endpoint ?? process.env.OPENAI_API_ENDPOINT ?? 'https://api.openai.com/v1',
    });

    return await generateObject({
        model: openai.chat(model.model_id ?? 'ft:gpt-4o-mini-2024-07-18:personal:prueba-1:AFr1ffw3'),
        system: challengerPrompt,
        messages,
        schema: challengerSchema,
    });
};
