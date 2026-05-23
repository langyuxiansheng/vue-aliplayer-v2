export type SourceFormat = 'mp4' | 'm3u8' | 'flv' | 'rtmp' | 'mp3' | null;

const KNOWN_FORMATS: SourceFormat[] = ['m3u8', 'flv', 'mp4', 'rtmp', 'mp3'];

export function inferSourceFormat(source?: string | null): SourceFormat {
    if (!source) return null;

    if (/^rtmps?:\/\//i.test(source)) return 'rtmp';

    const cleanSource = source.split('?')[0].split('#')[0].toLowerCase();
    const matched = KNOWN_FORMATS.find((format) => format && cleanSource.endsWith(`.${format}`));
    return matched || null;
}

export function normalizeSource(source?: string | null): string | null {
    if (!source) return source || null;
    if (/^(data|blob):/i.test(source)) return source;

    try {
        return encodeURI(source);
    } catch {
        return source;
    }
}

