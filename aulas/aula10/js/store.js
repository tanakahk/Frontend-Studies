var store = {
    state: {
      products: [
        {
          id: 1,
          brand: "Lenovo",
          title: "Notebook Lenovo Ideapad S145",
          description: "Notebook Lenovo Ideapad S145, Intel Core i7-1065G7, 8GB, SSD 256GB, 15.6´ Full HD, Dolby Audio, Windows 10 Home, Prata - 82DJ0000BR",
          price: 44000,
          count: 100,
          status: "Active",
          images: [
            "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102487_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102482_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102475_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102472_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/106997/notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_notebook-lenovo-ultrafino-ideapad-s145-amd-ryzen-5-3500u-4gb-hd-1tb-windows-10-15-6-prata-81v70001br_1574102473_gg.jpg",
            "https://images6.kabum.com.br/produtos/fotos/103606/notebook-lenovo-ultrafino-ideapad-s145-intel-core-i7-8565u-8gb-1tb-nvidia-geforce-mx110-windows-10-15-6-prata-81s90003br_1566907790_gg.jpg",
          ],
        },
        {
          id: 2,
          brand: "WD",
          title: "SSD WD Blue, 500GB",
          description: "SSD WD Blue, 500GB, SATA, Leitura 560MB/s, Gravação 530MB/s - WDS500G2B0A",
          price: 510,
          count: 500,
          status: "Active",
          images: [
            "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014871_index_gg.jpg",
            "https://images4.kabum.com.br/produtos/fotos/95874/95874_1_1523014822_gg.jpg",
            "https://images4.kabum.com.br/produtos/fotos/95874/95874_2_1523014822_gg.jpg",
            "https://images4.kabum.com.br/produtos/fotos/95874/95874_3_1523014822_gg.jpg",
            "https://images4.kabum.com.br/produtos/fotos/95874/95874_1523014822_gg.jpg",

          ],
        },
        {
          id: 3,
          brand: "Microsoft",
          title: "Controle Microsoft Xbox",
          description: "Controle Microsoft Xbox, Sem Fio, Preto - QAT-00007",
          price: 420,
          count: 500,
          status: "Active",
          images: [
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326879_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326881_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326878_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326883_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326882_gg.jpg",
            "https://images7.kabum.com.br/produtos/fotos/128647/controle-microsoft-xbox-sem-fio-preto-qat-00007_1601326880_gg.jpg",
          ],
        },
        {
          id: 4,
          brand: "Kingston",
          title: "SSD Kingston A400, 480GB",
          description: "SSD Kingston A400, 480GB, SATA, Leitura 500MB/s, Gravação 450MB/s - SA400S37/480G",
          price: 460,
          count: 800,
          status: "Active",
          images: [
            "https://images8.kabum.com.br/produtos/fotos/85198/85198_index_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/85198/85198_1484306114_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/85198/85198_1484306119_gg.jpg",
          ],
        }, 
        {
          id: 5,
          brand: "LG",
          title: 'Monitor LG LED 27"',
          description: 'Monitor LG LED 27", 4K, UHD, IPS, HDMI/DisplayPort, AMD Radeon FreeSync, Altura Ajustável, VESA - 27MU58P-B.AWZ',
          price: 1800,
          count: 80,
          status: "Active",
          images: [
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477437_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477435_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1606477436_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736567_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736564_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736562_gg.jpg",
            "https://images8.kabum.com.br/produtos/fotos/130218/monitor-lg-led-27-4k-uhd-ips-hdmi-displayport-freesync-altura-ajustavel-27mu58p-b-awz_1603736565_gg.jpg",
          ],
        }, 
        {
          id: 6,
          brand: "Acer",
          title: "Monitor Gamer Acer LED 23.6´",
          description: "Monitor Gamer Acer LED 23.6´ Full HD, HDMI/DisplayPort, Free Sync, 165Hz, 0.5ms, Inclinação Ajustável, Preto/Vermelho - KG241Q Sbiip",
          price: 1320,
          count: 50,
          status: "Active",
          images: [
            "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007082_gg.jpg",
            "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007081_gg.jpg",
            "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007084_gg.jpg",
            "https://images0.kabum.com.br/produtos/fotos/111960/monitor-gamer-acer-led-23-6-full-hd-hdmi-displayport-free-sync-165hz-0-5ms-inclinacao-ajustavel-preto-vermelho-kg241q-sbiip_1588007083_gg.jpg",
          ],
        }, 
        /* 
        {
          id: ,
          brand: "",
          title: "",
          description: "",
          price: ,
          count: ,
          status: "Active",
          images: [],
        }, 
        */
      ],
    },

    getters: {
      productById: function(productId){
        var products = App.store.state.products;

        for (let i = 0; i < products.length; i++) {
          var product = products[i];

          if (product.id === productId) {
            return product;            
          };
        };

        return null;
      },
    },

    mutations: {
      changeCount: function (productId, newCount) {
        var product = App.store.getters.productById(productId);
        product.count = newCount;
      },
    },
  };