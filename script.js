 // Your app store URLs
      const IOS_URL = "https://apps.apple.com/us/app/iolilocvani/id6754865510";
      const ANDROID_URL =
        "https://play.google.com/store/apps/details?id=com.lupusa87.ioliLocvani";

      async function detectPlatformAndRedirect() {
        const userAgent =
          navigator.userAgent || navigator.vendor || window.opera;

        // Count visit FIRST (wait for it)
        await updateVisitorCount();

        // Detect iOS - REDIRECT AFTER COUNTING
        if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
          window.location.href = IOS_URL;
          return;
        }

        // Detect Android - REDIRECT AFTER COUNTING
        if (/android/i.test(userAgent)) {
          window.location.href = ANDROID_URL;
          return;
        }

        // Desktop or unknown - show both options IMMEDIATELY
        document.querySelector(".loader").style.display = "none";
        document.getElementById("message").textContent = "აირჩიეთ პლატფორმა:";
        document.getElementById("fallback").style.display = "block";
      }

      async function updateVisitorCount() {
        const counterEl = document.getElementById("visitCount");
        if (!counterEl) return;

        try {
          const response = await fetch(
            "https://counterapi.com/api/lupusa87vakhtangiabashidze-ka-eng/view/iolidownload"
          );
          if (!response.ok) throw new Error("Counter API request failed");

          const data = await response.json();
          counterEl.textContent = data.value || "0";
        } catch (error) {
          console.error("Failed to update visitor count:", error);
          counterEl.textContent = "შეცდომა";
        }
      }

      // Run detection (which now includes counting)
      detectPlatformAndRedirect();