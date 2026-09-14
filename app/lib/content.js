import fs from 'fs';
import path from 'path';

/**
 * Slug to content file mapping. Add new entries when adding project descriptions.
 * Files live in public/text/
 */
const slugToContentFile = {
  'ramsey-games': 'ramsey-games_desc.txt',
  'gold-price-prediction': 'gold-price-prediction_desc.txt',
  'phex-ai': 'phex-ai_desc.txt',
  'quiz-corrections': 'quiz-corrections_desc.txt',
  aegis: 'aegis_desc.txt',
  sentinel: 'sentinel_desc.txt',
};

/**
 * Slug to PDF path mapping for projects with papers.
 * PDFs live in public/pdfs/
 */
const slugToPdf = {
  'ramsey-games': '/pdfs/Draw_Thresholds_in_Ramsey_Two_Player_Games(revised).pdf',
  'gold-price-prediction': '/pdfs/Gold_Price_Prediction.pdf',
};

export function getProjectContent(slug) {
  const fileName = slugToContentFile[slug];
  if (!fileName) return null;
  try {
    const filePath = path.join(process.cwd(), 'public', 'text', fileName);
    return fs.readFileSync(filePath, 'utf-8');
  } catch {
    return null;
  }
}

export function getProjectPdf(slug) {
  return slugToPdf[slug] || null;
}

/** Optional screenshots for projects with visual demos */
const slugToScreenshots = {
  'phex-ai': ['/screenshots/phex-1.png'],
};

/** Optional video for project detail pages */
const slugToVideo = {
  'quiz-corrections': '/recordings/quiz_corrections_fast.mp4',
};

/** Optional YouTube demo video (id only) for project detail pages */
const slugToYoutubeId = {
  aegis: 'vuSZNeVjZGE',
  sentinel: '2TdKFe43PIk',
};

export function getProjectScreenshots(slug) {
  return slugToScreenshots[slug] || [];
}

export function getProjectVideo(slug) {
  return slugToVideo[slug] || null;
}

export function getProjectYoutubeId(slug) {
  return slugToYoutubeId[slug] || null;
}
