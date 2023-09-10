export const paperMainStyle = (photo) => ({
  position: 'relative',
  backgroundColor: 'grey',
  color: '#fff',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'bottom',
  backgroundImage: `url(${photo})`,
  minHeight: 450,
});

export const boxMainStyle = {
  position: 'relative',
  p: { xs: 3, md: 6 },
  pr: { md: 0 },
};

export const containerContactsStyle = (photo) => ({
  position: 'relative',
  backgroundColor: 'grey.300',
  color: '#0c0808',
  mb: 4,
  mt: 10,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'top',
  backgroundImage: `url(${photo})`,
});

export const boxContactsStyle = {
  bgcolor: 'rgba(145, 185, 229, 0.15)',
  mx: 'auto',
  borderRadius: 5,
  maxWidth: 500,
  px: 5,
  marginTop: 10,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxFormStyle = {
  marginTop: 8,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const boxBottomFStyle = {
  display: 'flex',
  justifyContent: 'center',
  mb: 4,
  alignItems: 'center'
};

export const avatarStyle = {
  m: 1,
  bgcolor: 'secondary.main'
};

