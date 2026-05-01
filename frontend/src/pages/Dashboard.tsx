import { useEffect, useState, useCallback } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

import API from "../services/api";

interface Profile {
  _id: string;
  name: string;
  email: string;
  bio: string;
  skills: string[];
  githubUsername: string;
}

interface GithubUser {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  stargazers_count: number;
  html_url: string;
  updated_at: string;
}

function Dashboard() {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [githubData, setGithubData] = useState<GithubUser | null>(null);
  const [repos, setRepos] = useState<GithubRepo[]>([]);

  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState("");
  const [githubUsername, setGithubUsername] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Dark Mode
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const fetchGithubData = async (username: string) => {
    try {
      const userRes = await API.get(`/github/${username}`);

      setGithubData(userRes.data);

      const repoRes = await API.get(`/github/${username}/repos`);

      const sortedRepos = repoRes.data
        .sort(
          (a: GithubRepo, b: GithubRepo) =>
            new Date(b.updated_at).getTime() -
            new Date(a.updated_at).getTime()
        )
        .slice(0, 6);

      setRepos(sortedRepos);

    } catch {
      toast.error("Failed to load GitHub data ❌");
    }
  };

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);

      const res = await API.get("/profile");

      setProfile(res.data);

      setBio(res.data.bio || "");
      setSkills(res.data.skills?.join(", ") || "");
      setGithubUsername(res.data.githubUsername || "");

      if (res.data.githubUsername) {
        fetchGithubData(res.data.githubUsername);
      }

    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(
        err.response?.data?.message ||
          "Failed to load profile ❌"
      );
    } finally {
      setLoading(false);
    }
  }, []);

  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);
  /* eslint-enable react-hooks/set-state-in-effect */

  const updateProfile = async () => {
    try {
      await API.put("/profile", {
        bio,
        skills: skills.split(",").map((skill) => skill.trim()),
        githubUsername,
      });

      toast.success("Profile Updated ✅");

      setIsEditing(false);

      fetchProfile();

    } catch (error: unknown) {
      const err = error as { response?: { data?: { message?: string } } };
      toast.error(
        err.response?.data?.message ||
          "Profile update failed ❌"
      );
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");

    toast.success("Logged Out");

    window.location.href = "/";
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-3xl font-bold text-blue-600 animate-pulse">
          Loading DevPulse...
        </div>
      </div>
    );
  }

  if (!profile) {
    return <h2>No Profile Found</h2>;
  }

  return (
    <div
      className={`min-h-screen transition duration-300 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-black"
      }`}
    >

      {/* Navbar */}
      <nav
        className={`flex justify-between items-center px-6 py-4 shadow-md ${
          darkMode ? "bg-gray-800" : "bg-white"
        }`}
      >

        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-blue-600"
        >
          DevPulse
        </motion.h1>

        <div className="flex items-center gap-4">

          {/* Dark Mode */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-xl bg-gray-200 text-black"
          >
            {darkMode ? (
              <Sun size={20} />
            ) : (
              <Moon size={20} />
            )}
          </motion.button>

          {/* Edit */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsEditing(!isEditing)}
            className="bg-black text-white px-4 py-2 rounded-xl"
          >
            ✏️ Edit
          </motion.button>

          {/* Logout */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogout}
            className="bg-red-500 text-white px-4 py-2 rounded-xl"
          >
            Logout
          </motion.button>

        </div>
      </nav>

      {/* Main Container */}
      <div className="p-4 md:p-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`max-w-5xl mx-auto shadow-lg rounded-3xl p-6 md:p-10 ${
            darkMode ? "bg-gray-800" : "bg-white"
          }`}
        >

          {/* User Info */}
          <div className="mb-8">

            <h2 className="text-3xl font-semibold">
              {profile.name}
            </h2>

            <p
              className={`text-lg ${
                darkMode ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {profile.email}
            </p>

          </div>

          {/* GitHub Card */}
          {githubData && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className={`rounded-3xl p-6 mb-10 flex flex-col md:flex-row items-center gap-6 ${
                darkMode
                  ? "bg-gray-700"
                  : "bg-gray-100"
              }`}
            >

              <img
                src={githubData.avatar_url}
                alt="avatar"
                className="w-28 h-28 rounded-full"
              />

              <div className="flex-1">

                <h2 className="text-4xl font-bold">
                  {githubData.name}
                </h2>

                <p className="text-gray-400 text-xl mb-4">
                  @{githubData.login}
                </p>

                <div className="flex flex-wrap gap-6 text-lg font-semibold mb-4">

                  <p>
                    Followers: {githubData.followers}
                  </p>

                  <p>
                    Following: {githubData.following}
                  </p>

                  <p>
                    Repos: {githubData.public_repos}
                  </p>

                </div>

                <a
                  href={githubData.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-black text-white px-6 py-3 rounded-xl inline-block"
                >
                  View GitHub
                </a>

              </div>
            </motion.div>
          )}

          {/* Repositories */}
          {repos.length > 0 && (
            <div className="mb-10">

              <h2 className="text-3xl font-bold mb-6">
                GitHub Repositories
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {repos.map((repo) => (
                  <motion.div
                    key={repo.id}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`rounded-2xl p-5 shadow-sm ${
                      darkMode
                        ? "bg-gray-700"
                        : "bg-gray-100"
                    }`}
                  >

                    <h3 className="text-xl font-bold mb-2">
                      {repo.name}
                    </h3>

                    <p className="text-gray-400 mb-4">
                      {repo.description ||
                        "No description"}
                    </p>

                    <div className="flex justify-between items-center">

                      <p>
                        ⭐ {repo.stargazers_count}
                      </p>

                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-black text-white px-4 py-2 rounded-xl"
                      >
                        View Repo
                      </a>

                    </div>
                  </motion.div>
                ))}

              </div>
            </div>
          )}

          {/* Bio */}
          <div className="mb-6">

            <h2 className="text-2xl font-semibold mb-2">
              Bio
            </h2>

            {isEditing ? (
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full border rounded-xl p-4 text-black"
                rows={4}
              />
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>

          {/* Skills */}
          <div className="mb-6">

            <h2 className="text-2xl font-semibold mb-2">
              Skills
            </h2>

            {isEditing ? (
              <input
                type="text"
                value={skills}
                onChange={(e) => setSkills(e.target.value)}
                className="w-full border rounded-xl p-4 text-black"
              />
            ) : (
              <div className="flex gap-3 flex-wrap">

                {profile.skills?.map(
                  (skill: string, index: number) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full"
                    >
                      {skill}
                    </span>
                  )
                )}

              </div>
            )}
          </div>

          {/* GitHub Username */}
          <div className="mb-6">

            <h2 className="text-2xl font-semibold mb-2">
              GitHub Username
            </h2>

            {isEditing ? (
              <input
                type="text"
                value={githubUsername}
                onChange={(e) =>
                  setGithubUsername(e.target.value)
                }
                className="w-full border rounded-xl p-4 text-black"
              />
            ) : (
              <p>{profile.githubUsername}</p>
            )}
          </div>

          {/* Save Button */}
          {isEditing && (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={updateProfile}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl text-lg"
            >
              Save Changes
            </motion.button>
          )}

        </motion.div>
      </div>
    </div>
  );
}

export default Dashboard;