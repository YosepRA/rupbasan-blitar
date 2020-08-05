// const tindakPidana = ['Umum', 'Khusus'];
// const instansi = ['Kejari Blitar', 'Polres Blitar Kota', 'Polres Blitar'];
// const satuan = ['Unit', 'Buah', 'Batang'];
// const klasifikasi = ['Umum Terbuka', 'Berbahaya', 'Berharga'];
// const golongan = ['KBM', 'Elektronik', 'KTBM'];
// const kondisi = ['Rusak Berat', 'Rusak', 'Baik'];

export const filterKeys = {
  tindakPidana: {
    title: 'Tindak Pidana', // For filter label.
    keys: [
      { name: 'umum', slug: 'umum' },
      { name: 'khusus', slug: 'khusus' },
    ],
  },
  instansi: {
    title: 'Instansi',
    keys: [
      // Slug will be used for URL parameter reference. For now, 'instansi' will be the only filter ~
      // ~ parameter to use it, while leaving the other fields as it is.
      { name: 'kejari blitar', slug: 'kejariblitar' },
      {
        name: 'polres blitar kota',
        slug: 'polresblitarkota',
      },
      { name: 'polres blitar', slug: 'polresblitar' },
    ],
  },
  klasifikasi: {
    title: 'Klasifikasi',
    keys: [
      { name: 'umum terbuka', slug: 'umumterbuka' },
      { name: 'berbahaya', slug: 'berbahaya' },
      { name: 'berharga', slug: 'berharga' },
    ],
  },
};
