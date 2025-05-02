document.addEventListener('DOMContentLoaded',()=>{
// XSS протекшЫн
  const escapeHTML=str=>str.replace(/[&<>'"]/g,tag=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[tag]));
  
 
  const loadReviews=async()=>{
  try{
  const response=await fetch('/api/reviews',{
  headers:{'Content-Type':'application/json','X-Requested-With':'XMLHttpRequest'},
  credentials:'same-origin'
  });
  if(!response.ok)throw new Error('Network error');
  const data=await response.json();
  return data;
  }catch(err){
  console.error('Error loading reviews:',err);
  return [];
  }};
  

  const displayReviews=(reviews,container)=>{
  const reviewHTML=reviews.map(review=>`
  <div class="review-card">
  <div class="review-header">
  <div class="review-car">${escapeHTML(review.brand)} ${escapeHTML(review.model)}</div>
  <div class="review-rating">${'★'.repeat(review.rating)+'☆'.repeat(5-review.rating)}</div>
  </div>
  <div class="review-author">${escapeHTML(review.author)}, ${escapeHTML(review.date)}</div>
  <div class="review-text">${escapeHTML(review.text)}</div>
  </div>
  `).join('');
  container.innerHTML+=reviewHTML;
  };
  
  
  const init=async()=>{
  const reviewsContainer=document.getElementById('reviews-container');
  const loadMoreBtn=document.getElementById('load-more');
  let currentPage=1;
  const reviews=await loadReviews();
  
 
  displayReviews(reviews.slice(0,6),reviewsContainer);
  

  loadMoreBtn.addEventListener('click',()=>{
  const nextPage=reviews.slice(currentPage*6,(currentPage+1)*6);
  displayReviews(nextPage,reviewsContainer);
  currentPage++;
  if(currentPage*6>=reviews.length)loadMoreBtn.style.display='none';
  });
  

  document.getElementById('brand-filter').addEventListener('change',filterReviews);
  document.getElementById('model-filter').addEventListener('change',filterReviews);
  document.getElementById('rating-filter').addEventListener('change',filterReviews);
  
  function filterReviews(){
  const brand=document.getElementById('brand-filter').value;
  const model=document.getElementById('model-filter').value;
  const rating=document.getElementById('rating-filter').value;
  const filtered=reviews.filter(r=>
  (!brand||r.brand===brand)&&
  (!model||r.model===model)&&
  (!rating||r.rating>=parseInt(rating))
  );
  reviewsContainer.innerHTML='';
  displayReviews(filtered.slice(0,currentPage*6),reviewsContainer);
  }};
  
  
  init();
  });